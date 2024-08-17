// fullData.js
import BNP from "../bnp.png";
import Dez from "../dez.png";
import Login from "../login.png";
export const portfolioData = [
    {
        id: 1,
        title: "Bukhara Natural Product",
        description:
            "Men bu saytni asosan qulda local holatda tayyorladim uzim bilgan yullar va ui uslubda kodlarni yozdim.Axios surovlari orqali telegram bot bilan, integratsiya qildim. Bundand Tashqari chiroyli qilish uchun FramerMotiondan foydalandim. Asoslar ReactToast error, success, bildiradi xabar borgan bormaganligini bilishlik uchun.Qisman qolgani bilan saytda tanishsanggiz bo'ladi ",
        imageUrl: BNP,
        link: "https://bnp-shops.vercel.app/",
        author: "Ulugbek Eshnazarov",
        technologies:
            "React, React-Toastify, Tailwindui.com, Axios, FramerMotion, TelegramApi ,HTML, CSS, JavaScript",
        features: "RealAddComments, Responsive design, Maping Localdata",
        category: "new",
        date: "2023-08-16", // Sana
    },
    {
        id: 2,
        title: "Dezenfiksia xizmati sayti.",
        description:
            "Bu sayt bir sahifali, va unda ham axios surov bulgan telegramga malumot yuborishda va responsivelikga judayam yaxshi qattiq qaraganman, react toast ishlatganman va barcha uini tailwind cssda yozganman va til qushganman asosiy farqlar shunda...",
        imageUrl: Dez,
        link: "https://dezenfiksia-uz.vercel.app/",
        author: "Ulugbek Eshnazarov",
        technologies:
            "HTML, CSS, JavaScript, Vite React, Reacti18n React-Toastify, TailwindCss, TelegramBotApi",
        features:
            "LendingPage, Telegrambot integration, Axios request, Tailwind ui styles, Reacti18n language supported. ",
        category: "new", // Yangi
        date: "2024-08-16", // Sana
    },
    {
        id: 3,
        title: "Login Auth",
        description:
            "Bu sahifa uchun men tailwind css, react toast, axios, va tayyor fake apidan foydalanib yaratganman dastur yaxshi chiqdi birinchi qilganimda ancha muommolar bulgandi xatoliklar arzimas... login : exam@gmail.com parol: 12345;",
        imageUrl: Login,
        link: "https://loginrjsx.vercel.app/",
        author: "Ulugbek Eshnazarov",
        techStack: "HTML, CSS",
        technologies: "HTML, CSS, JavaScript, React, Axios, React-Toastify,",
        features:
            "dinamik website, Basic design, api connections, and ui designs",
        category: "old", // Eski
        date: "2023-08-01", // Sana
    },
    {
        id: 4,
        title: "Alifshop.uz",
        description: "Assalomu, Alaykum",
        imageUrl: Login,
        link: "https://alifshopuz.vercel.app/",
        author: "Ulugbek Eshnazarov",
        techStack: "HTML, CSS",
        technologies: "HTML, CSS, JavaScript, React, Axios, React-Toastify,",
        features:
            "dinamik website, Basic design, api connections, and ui designs",
        category: "old", // Eski
        date: "2023-08-01", // Sana
    },
];
