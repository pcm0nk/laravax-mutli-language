export default defineI18nConfig(() => ({
    legacy: false,
    locales: ['en', 'fa'], // used in URL path prefix
    defaultLocale: 'fa', // default locale of your project for Nuxt pages and routings
    messages: {
        en: {
            welcome: 'Welcome',
            loading: 'Loading...',
            auth: {
                username: "User Name",
                password: 'Password',
                emailormobile: "Email Or Mobile",
                email: "Email",
                logintosystem: "Login To System",
                login: 'Login',
                register: 'Register',
                forgotpassword: 'Forget your passsword?',
            }
        },
        fa: {
            welcome: 'خوش آمدید',
            loading: 'در حال بارگذاری',
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
    }
}))