export default defineI18nLocale(async locale => {
    return {
        welcome: 'Welcome',
        loading: 'Loading...',
        currentlanguage: 'English',
        currentdirection: 'Direction',
        home: 'Home',
        navigation: {
            organizationchart: 'Organization Chart',
            logout: 'Logout',
            actions: 'Actions',
            charts: 'Charts',
            basicinfo: 'Basic Info',
            levels: 'Levels',
            topcharts: 'Top Chart',
            reports: 'Reports',
        },
        auth: {
            username: "User Name",
            password: 'Password',
            emailormobile: "Email Or Mobile",
            email: "Email",
            logintosystem: "Login To System",
            login: 'Login',
            register: 'Register',
            forgotpassword: 'Forget your passsword?',
        },
        pages: {
            dashboard: 'Dashboard',
            company: 'Company'
        }
    }
})