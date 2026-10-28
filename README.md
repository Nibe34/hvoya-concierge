# HVOYA Concierge: гостьовий Wi-Fi з captive portal

Гість підключається до відкритої мережі `HVOYA Guest` → телефон показує «Увійдіть у мережу» →
відкривається **splash-сторінка** (`portal/`) → гість натискає «Підключитися» → контролер Cisco
відкриває інтернет і перенаправляє на **лендінг-консьєрж** (`site/`).

```
portal/            сторінка авторизації (на контролері Cisco або на pre-auth сервері)
  login.html       без зовнішніх ресурсів, UA/EN, години роботи
  logo.svg
site/              лендінг після авторизації (будь-який статичний хостинг)
  index.html       розмітка, стилі, рендер
  content.js       УВЕСЬ текст, години, телефони, соцмережі: редагувати тут
  img/             фото з hotelhvoya.com (webp)
```

## Локальний перегляд

```bash
python3 -m http.server 8000
# http://localhost:8000/portal/login.html
# http://localhost:8000/site/index.html?lang=en
```

## Що треба уточнити перед запуском

- [ ] **Модель контролера Cisco** (Catalyst 9800 / AireOS WLC / Meraki / Cisco Business Wireless)
- [ ] Час заїзду і виїзду: зараз у `content.js` стоять **14:00 / 12:00** (на сайті цих даних немає)
- [ ] Години SPA: на головній сайту вказано 10:00–21:00, а на сторінці SPA 9:00–21:00 і нічне 21:00–01:00. Зараз використано другий варіант.
- [ ] Адреса лендінгу: у `portal/login.html` → `LANDING_URL` (зараз `https://wifi.hotelhvoya.com/`)
- [ ] Пряме посилання на відгуки Google Maps (зараз пошук за назвою)
- [ ] Текст правил користування мережею (можна посилатися на сторінку на hotelhvoya.com)

## Хостинг лендінгу

Варіанти:
1. Субдомен `wifi.hotelhvoya.com` на Cloudflare Pages або Netlify (безкоштовно; потрібен CNAME у DNS домену).
2. Папка на поточному хостингу WordPress: `hotelhvoya.com/wifi/`. Достатньо завантажити вміст `site/`.

Лендінг відкривається **після** авторизації, тому в pre-auth ACL його додавати не треба.

## Налаштування Cisco

Готова конфігурація для інфраструктури готелю (vWLC + ASR1002): [`network/guest-wifi-config.md`](network/guest-wifi-config.md).
Нижче загальна довідка.

Тип авторизації **Web Consent / Passthrough**: без логіна і пароля, лише кнопка «Прийняти».
Форма в `login.html` надсилає `buttonClicked=4` і `redirect_url`. Це стандартний формат Cisco webauth.

### Catalyst 9800 (IOS-XE)

**Варіант А: сторінка на самому контролері** (простіше, сервер не потрібен):

```
! завантажити portal/login.html у bootflash: (через GUI: Administration → Management → File Manager)
parameter-map type webauth global
 virtual-ip ipv4 192.0.2.1
!
parameter-map type webauth HVOYA
 type consent
 custom-page login device bootflash:login.html
!
wlan HVOYA-Guest 10 "HVOYA Guest"
 no security wpa
 no security wpa wpa2
 no security wpa akm dot1x
 security web-auth
 security web-auth parameter-map HVOYA
 no shutdown
```

> На 9800 у режимі internal custom page зображення поруч із html часто не віддаються.
> Тоді вбудуйте логотип у `login.html` як data URI:
> `base64 -w0 portal/logo.svg` → `src="data:image/svg+xml;base64,…"`.

**Варіант Б: External WebAuth** (сторінка на окремому сервері в локальній мережі):

```
parameter-map type webauth HVOYA
 type consent
 redirect for-login http://<IP-сервера>/login.html
 redirect portal ipv4 <IP-сервера>
```

`redirect portal ipv4` створює pre-auth ACL до сервера автоматично. Також має бути дозволений DNS.

### AireOS WLC (2504 / 3504 / 5520 / 8540)

1. WLAN → Security → Layer 2: **None**; Layer 3: **Web Policy → Passthrough**.
2. Security → Web Auth → Web Login Page:
   - **Customized**: запакувати `tar -cf hvoya.tar -C portal login.html logo.svg ring.svg` і завантажити
     через Commands → Download File → *WebAuth Bundle*;
   - або **External**: вказати URL сторінки і додати pre-auth ACL до сервера.
3. Captive Bypassing **вимкнений** (`config network web-auth captive-bypass disable`), інакше iOS не покаже вікно.

### Загальні рекомендації

- **Session timeout** гостьової WLAN: близько 24 год, щоб гість не авторизувався щоразу.
- **Client isolation / P2P blocking**: увімкнути.
- Окремий VLAN для гостей, обмеження швидкості на клієнта.
- HTTPS-перехоплення не працює без валідного сертифіката на virtual IP. Телефони самі перевіряють
  HTTP (`captive.apple.com`, `connectivitycheck.gstatic.com`), тому цього достатньо.
