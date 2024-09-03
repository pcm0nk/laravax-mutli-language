export default defineNuxtRouteMiddleware((route, from) => {
    const localePath = useLocalePath()
    const newPath = localePath(route.fullPath);
    if (newPath != route.fullPath) {
        return navigateTo(newPath)
    }

})
