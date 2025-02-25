import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                welcome: "Welcome",
                search: "Quick Search",
                link1 : "About Company",
                link2 : "Activity",
                link3: "Personal",
                link4: "To the client",
                link5: "Shareholder and investor",
                link6: "Press center",
                link7: "Tendering",
                link8: "Contacts",
                herotitle : "Who and how much I hate chocolate salad. Diam hendrerit purus dui nisl scelerisque in pharetra molestie. Now time.",
                heroBtn: "More",
                shareholder : "to Shareholders",
                investors : "to Investors",
                
            }
        },
        ru: {
            translation: {
                welcome: "Добро пожаловать",
                search: "Быстрый поиск по сайту",
                link1: "О компании",
                link2: "Деятельность",
                link3: "Персонал",
                link4: "Клиенту",
                link5: "Акционеру и инвестору",
                link6: "Пресс-центр",
                link7: "Торги",
                link8: "Контакты",
                heroTitle: "Кто и насколько я ненавижу шоколадный салат. Diam hendrerit purus dui nisl scelerisque in pharetra molestie. Сейчас самое время.",
                heroBtn: "Подробнее",
                shareholder: "Акционерам",
                investors: "Инвесторам",

            }
        },
        uz: {
            translation: {
                welcome: "Xush kelibsiz",
                search: "Tezkor qidirish",
                link1: "Kompaniya haqida",
                link2: "Faoliyat",
                link3: "Xodimlar",
                link4: "Mijozga",
                link5: "Aksiyador va investor",
                link6: "Press-markaz",
                link7: "Sotuv",
                link8: "Kontaktlar",
                heroTitle : "Shokoladli salat kimdan va qanchalik yomon ko'raman. Diam hendrerit purus dui nisl sclerisque in pharetra molestie. Endi vaqt.",
                heroBtn : "Batafsil",
                shareholder: "Aksiyadorlarga",
                investors: "Investorlarga",
            }
        },
    },
    lng: localStorage.getItem("language") || navigator.language.split("-")[0],
    fallbackLng: "ru",
    interpolation: { escapeValue: false },
});

export default i18n;