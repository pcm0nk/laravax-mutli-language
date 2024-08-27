export default defineI18nLocale(async locale => {
    return {
        welcome: 'خوش آمدید',
        loading: 'در حال بارگذاری',
        currentlanguage: 'فارسی',
        currentdirection: 'کجایی',
        navigation: {
            organizationchart: "نمودار سازمانی",
            logout: "خروج",
            actions: "اقدامات",
            charts: "نمودارها",
            basicinfo: "اطلاعات پایه",
            levels: "سطوح",
            topchart: "نمودار برتر",
            reports: "گزارش‌ها"
        },
        auth: {
            username: "نام کاربری",
            password: 'رمز عبور',
            emailormobile: "ایمیل یا موبایل",
            email: "ایمیل",
            logintosystem: "ورود به سیستم",
            login: 'ورود',
            register: 'ثبت نام',
            forgotpassword: 'فراموشی رمز عبور!'
        }

    }
})