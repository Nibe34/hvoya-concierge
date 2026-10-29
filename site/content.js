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
    hotelEvents: "https://t.me/hvoyahotelspa",
    restaurantEvents: "https://t.me/hvoya_tavel_concert",
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

  // «Що цікавого сьогодні?»: дві картки з подіями (telegram-канали).
  events: [
    { id: "hotel", color: "touch", link: "hotelEvents" },
    { id: "restaurant", color: "eat", link: "restaurantEvents" }
  ],

  // «Сервіси готелю»: кожен сервіс у своєму кольорі та відчутті бренду.
  services: [
    { id: "massage", color: "feel", img: "img/spa.webp", link: "https://booking.easyweek.com.ua/spa-hvoya" },
    { id: "camp", color: "smell", img: "img/kids.webp", link: "https://t.me/hvoya_hotel_official_bot" },
    { id: "sport", color: "listen", img: "img/ski.webp", link: "https://booking.easyweek.com.ua/spa-hvoya" },
    { id: "restaurant", color: "eat", img: "img/restaurant.webp", link: "https://expz.app/hvoya" },
    { id: "extra", color: "touch", img: "img/lobby.webp", link: "https://t.me/hvoya_hotel_official_bot" }
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
      connected: "[ wi-fi підключено ]",
      heroTitle: "Вітаємо у HVOYA!",
      heroLead: "усе для твого комфортного відпочинку — в одному місці.",
      heroPhotoAlt: "ресторан «кухня гір» з видом на смерековий ліс",
      receptionLabel: "[ зв’язок із рецепцією 24/7 ]",
      callReception: "зателефонувати на рецепцію",

      eventsTitle: "Що цікавого сьогодні?",
      view: "переглянути",
      servicesTitle: "Сервіси готелю",
      servicesNote: "[ все поруч, не виходячи з готелю ]",
      scheduleTitle: "Розклад",

      reviewLabel: "[ твоя думка ]",
      reviewTitle: "Як тобі у нас?",
      reviewText: "нам щиро важливо, що ти відчуваєш у хвої. якщо маєш хвилинку, розкажи про свій відпочинок: кожен відгук допомагає нам ставати кращими для тебе.",
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

      events: {
        hotel: { label: "[ події готелю ]", title: "Події готелю", text: "анімація, активності, заняття" },
        restaurant: { label: "[ події ресторану ]", title: "Події ресторану", text: "вечори, музика, спеціальні події" }
      },

      services: {
        massage: { sense: "[ відчуй відпочинок ]", title: "Масажі та догляд", text: "масажі та спа-процедури, щоб відновити сили після дня в горах.", cta: "записатися →", alt: "басейн у спа" },
        camp: { sense: "[ вдихни хвою ]", title: "Дитячий табір", text: "ігри, творчість і активності для малечі. деталі та запис у нашому telegram-боті.", cta: "дізнатися більше →", alt: "дитяча кімната" },
        sport: { sense: "[ слухай гори ]", title: "Спорт і заняття", text: "спортивна зала та заняття для гарного самопочуття. обери зручний час онлайн.", cta: "записатися →", alt: "лижна кімната" },
        restaurant: { sense: "[ смакуй ]", title: "Ресторан", text: "«кухня гір»: страви, заради яких хочеться повертатися, з видом на смерековий ліс.", cta: "переглянути меню →", alt: "зала ресторану" },
        extra: { sense: "[ торкнись каменю ]", title: "Додаткові послуги", text: "потрібно щось іще? напиши в наш telegram-бот, і ми охоче допоможемо.", cta: "написати →", alt: "лобі з каміном" }
      }
    },

    en: {
      connected: "[ you are connected to wi-fi ]",
      heroTitle: "Welcome to HVOYA!",
      heroLead: "everything for a comfortable stay, all in one place.",
      heroPhotoAlt: "kukhnia hir restaurant overlooking the spruce forest",
      receptionLabel: "[ reception 24/7 ]",
      callReception: "call the reception",

      eventsTitle: "What’s on today?",
      view: "view",
      servicesTitle: "Hotel services",
      servicesNote: "[ everything close by, without leaving the hotel ]",
      scheduleTitle: "Opening hours",

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

      events: {
        hotel: { label: "[ hotel events ]", title: "Hotel events", text: "entertainment, activities, classes" },
        restaurant: { label: "[ restaurant events ]", title: "Restaurant events", text: "evenings, music, special events" }
      },

      services: {
        massage: { sense: "[ feel rest ]", title: "Massage & care", text: "massages and spa treatments to recharge after a day in the mountains.", cta: "book →", alt: "spa pool" },
        camp: { sense: "[ smell of pine ]", title: "Kids camp", text: "games, crafts and activities for little ones. details and sign-up in our telegram bot.", cta: "learn more →", alt: "kids room" },
        sport: { sense: "[ listen to mountains ]", title: "Sport & classes", text: "a gym and classes to keep you feeling good. pick a convenient time online.", cta: "book →", alt: "ski room" },
        restaurant: { sense: "[ eat delicious ]", title: "Restaurant", text: "kukhnia hir: dishes worth coming back for, overlooking the spruce forest.", cta: "view menu →", alt: "restaurant hall" },
        extra: { sense: "[ touch the stone ]", title: "Extra services", text: "need anything else? message our telegram bot and we will gladly help.", cta: "message us →", alt: "lobby with fireplace" }
      }
    }
  }
};
