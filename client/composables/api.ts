import Api from '@/lib/api'

let api: Api
const localePath = useLocalePath();

export const useApi = () => {
  if (!api) {
    const config = useRuntimeConfig()
    api = new Api({
      fetchOptions: {
        baseURL: config.public.baseURL,
      },
      apiURL: config.public.apiURL,
      webURL: localePath(config.public.webURL),
      redirect: {
        companydashboard: localePath('company-dashboard'),
        logout: localePath('/auth/signin'),
        login: localePath('/auth/signin'),
      },
      /*
      echoConfig: {
        pusherAppKey: config.public.pusherAppKey,
        pusheAppCluster: config.public.pusherAppCluster,
      },
      */
    })
  }
  return api
}
