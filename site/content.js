// Увесь текст лендінгу. Щоб змінити години, телефони чи тексти, редагуйте лише цей файл.
// Позначки TODO: значення, яких немає на hotelhvoya.com, їх треба уточнити в готелю.
//
// Кольори з брендбуку (strategy_hvoya.pdf, розділ colors):
//   smell #84A98C · eat #52796F · listen #356469 · touch #2F3E46 · feel #CAD2C5 · white #FFFFFF
// У полі color нижче вказується назва кольору: smell | eat | listen | touch | feel.

window.HVOYA = {
  phones: {
    reception: "+380977008385",
    booking: "+380676117788",
    spa: "+380975000931",
    restaurant: "+380681761626"
  },

  links: {
    site: "https://hotelhvoya.com/",
    events: "https://hotelhvoya.com/events/",
    telegram: "https://t.me/hvoyahotelspa",
    bookingReview: "https://www.booking.com/hotel/ua/hvoya.uk.html#tab-reviews",
    googleReview: "https://www.google.com/maps/search/?api=1&query=HVOYA+Hotel+Bukovel"
  },

  // Кружечки соцмереж з текстурами з брендбуку (розділ texture color).
  socials: [
    { label: "instagram", url: "https://www.instagram.com/hvoyahotel/", tex: "img/tex-needles.webp" },
    { label: "facebook", url: "https://www.facebook.com/@hvoya.hotel/", tex: "img/tex-wood.webp" },
    { label: "tiktok", url: "https://www.tiktok.com/@hvoya_hotel", tex: "img/tex-concrete.webp" },
    { label: "youtube", url: "https://www.youtube.com/@hotelhvoya", tex: "img/tex-nature.webp" },
    { label: "telegram", url: "https://t.me/hvoyahotelspa", tex: "img/tex-paper.webp" }
  ],

  // Блок «сьогодні»: ключ береться з hours.
  quick: [
    { key: "breakfast", color: "eat" },
    { key: "spa", color: "feel" },
    { key: "ski", color: "listen" },
    { key: "checkout", color: "touch" }
  ],

  // «П'ять відчуттів хвої»: послуги, кожна у своєму кольорі бренду.
  senses: [
    { id: "spa", color: "feel", img: "img/spa.webp", link: "https://hotelhvoya.com/spa-new/" },
    { id: "restaurant", color: "eat", img: "img/restaurant.webp", link: "https://hotelhvoya.com/restoran/" },
    { id: "ski", color: "listen", img: "img/ski.webp", link: "https://hotelhvoya.com/lyzhni-kimnaty/" },
    { id: "lobby", color: "touch", img: "img/lobby.webp", link: "https://hotelhvoya.com/lobby/" },
    { id: "kids", color: "smell", img: "img/kids.webp", link: "https://hotelhvoya.com/dytyacha-kimnata/" }
  ],

  // Розклад. checkin/checkout — TODO: уточнити.
  hours: [
    { key: "breakfast", time: "8:00–11:00" },
    { key: "breakfastMenu", time: "11:00–13:00" },
    { key: "restaurant", time: "13:00–23:00" },
    { key: "spa", time: "9:00–21:00" },
    { key: "spaNight", time: "21:00–01:00" },
    { key: "ski", time: "8:00–20:00" },
    { key: "gym", time: "10:00–21:00" },
    { key: "kids", time: "9:00–00:00" },
    { key: "games", time: "9:00–23:00" },
    { key: "checkin", time: "14:00" },
    { key: "checkout", time: "12:00" }
  ],

  contacts: [
    { key: "reception", phone: "reception" },
    { key: "booking", phone: "booking" },
    { key: "spaPhone", phone: "spa" },
    { key: "restaurantPhone", phone: "restaurant" }
  ],

  // Тон бренду: теплий, привітний, з малої літери, без англіцизмів.
  text: {
    uk: {
      connected: "[ ви підключені до wi-fi ]",
      heroTitle: "Вітаємо вдома",
      heroLead: "тут зібрали все, що знадобиться під час відпочинку: розклад, послуги готелю та контакти. у хвої можна бути собою і робити те, що хочеться.",
      heroPhotoAlt: "ресторан «кухня гір» з видом на смерековий ліс",
      callReception: "зателефонувати на рецепцію",
      writeUs: "написати нам",

      todayTitle: "Сьогодні",
      sensesTitle: "П'ять відчуттів хвої",
      sensesNote: "[ все поруч, не виходячи з готелю ]",
      more: "детальніше →",
      scheduleTitle: "Розклад",

      eventsLabel: "[ події ]",
      eventsTitle: "Вечори в кухні гір",
      eventsText: "жива музика, гуцульські вечори та концерти. приходьте всією родиною: для малечі завжди знайдеться місце та смаколик.",
      eventsCta: "афіша подій",
      tableCta: "забронювати столик",

      reviewLabel: "[ ваша думка ]",
      reviewTitle: "Як вам у нас?",
      reviewText: "нам щиро важливо, що ви відчуваєте у хвої. якщо маєте хвилинку, розкажіть про свій відпочинок: кожен відгук допомагає нам ставати кращими для вас.",
      reviewGoogle: "відгук у google",
      reviewBooking: "відгук на booking",

      socialsTitle: "Ми в соцмережах",
      contactsTitle: "Контакти",
      address: "урочище вишні, буковель, івано-франківська область",
      footerPlace: "буковель",

      // підписи для розкладу та блоку «сьогодні»
      breakfast: "сніданок",
      breakfastMenu: "сніданок з меню",
      restaurant: "ресторан «кухня гір»",
      spa: "спа та басейн",
      spaNight: "нічне спа (16+)",
      ski: "лижна кімната",
      gym: "спортивна зала",
      kids: "дитяча кімната",
      games: "ігрова: більярд, аерохокей, приставки",
      checkin: "заїзд",
      checkout: "виїзд",

      reception: "рецепція, цілодобово",
      booking: "бронювання",
      spaPhone: "спа",
      restaurantPhone: "ресторан",

      senses: {
        spa: { sense: "[ відчуй відпочинок ]", title: "Спа та басейн", text: "басейн, сауни з ароматом карпатських трав і масажі. ввечері нічне спа для гостей від 16 років.", note: "входить у вартість", alt: "басейн у спа" },
        restaurant: { sense: "[ смакуй ]", title: "Кухня гір", text: "сніданки та вечері з видом на смерековий ліс. страви, заради яких хочеться повертатися.", note: "сніданок входить у вартість", alt: "зала ресторану" },
        ski: { sense: "[ слухай гори ]", title: "Лижні кімнати", text: "сушарки для черевиків і власний вихід до схилу № 7. від дверей до підйомника кілька кроків.", note: "входить у вартість", alt: "лижна кімната" },
        lobby: { sense: "[ торкнись каменю ]", title: "Лобі-бар", text: "тепло каміна, кава та коктейлі. затишне місце, щоб зібратися разом після дня в горах.", note: "щодня", alt: "лобі з каміном" },
        kids: { sense: "[ вдихни хвою ]", title: "Дитяча кімната", text: "атракціони, ігровий майданчик і безпечний простір, де малеча весело проводить час.", note: "входить у вартість", alt: "дитяча кімната" }
      }
    },

    en: {
      connected: "[ you are connected to wi-fi ]",
      heroTitle: "Welcome home",
      heroLead: "everything you need for your stay is right here: opening hours, hotel services and contacts. at hvoya you can be yourself and do what you love.",
      heroPhotoAlt: "kukhnia hir restaurant overlooking the spruce forest",
      callReception: "call the reception",
      writeUs: "message us",

      todayTitle: "Today",
      sensesTitle: "Five senses of hvoya",
      sensesNote: "[ everything close by, without leaving the hotel ]",
      more: "learn more →",
      scheduleTitle: "Opening hours",

      eventsLabel: "[ events ]",
      eventsTitle: "Evenings at kukhnia hir",
      eventsText: "live music, hutsul evenings and concerts. come with the whole family: there is always room and a treat for the little ones.",
      eventsCta: "event calendar",
      tableCta: "book a table",

      reviewLabel: "[ your opinion ]",
      reviewTitle: "How is your stay?",
      reviewText: "we truly care about how you feel at hvoya. if you have a minute, tell us about your stay: every review helps us become better for you.",
      reviewGoogle: "review on google",
      reviewBooking: "review on booking",

      socialsTitle: "Follow us",
      contactsTitle: "Contacts",
      address: "vyshni tract, bukovel, ivano-frankivsk region, ukraine",
      footerPlace: "bukovel",

      breakfast: "breakfast",
      breakfastMenu: "à la carte breakfast",
      restaurant: "kukhnia hir restaurant",
      spa: "spa & pool",
      spaNight: "night spa (16+)",
      ski: "ski room",
      gym: "gym",
      kids: "kids room",
      games: "games room: billiards, air hockey, consoles",
      checkin: "check-in",
      checkout: "check-out",

      reception: "reception, 24/7",
      booking: "reservations",
      spaPhone: "spa",
      restaurantPhone: "restaurant",

      senses: {
        spa: { sense: "[ feel rest ]", title: "Spa & pool", text: "pool, saunas scented with carpathian herbs and massages. night spa for guests aged 16+ in the evening.", note: "included", alt: "spa pool" },
        restaurant: { sense: "[ eat delicious ]", title: "Kukhnia hir", text: "breakfasts and dinners overlooking the spruce forest. dishes worth coming back for.", note: "breakfast included", alt: "restaurant hall" },
        ski: { sense: "[ listen to mountains ]", title: "Ski rooms", text: "boot dryers and our own access to slope no. 7. just a few steps from the door to the lift.", note: "included", alt: "ski room" },
        lobby: { sense: "[ touch the stone ]", title: "Lobby bar", text: "a warm fireplace, coffee and cocktails. a cosy place to gather after a day in the mountains.", note: "daily", alt: "lobby with fireplace" },
        kids: { sense: "[ smell of pine ]", title: "Kids room", text: "rides, a playground and a safe space where little ones have a great time.", note: "included", alt: "kids room" }
      }
    }
  }
};
