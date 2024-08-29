<script>
import { useLocale } from "vuetify";
const thesnackbar = defineAsyncComponent(() =>
  import("./components/reusable/snackbar.vue")
);
export default {
  setup() {
    const { locale } = useI18n();
    const config = useRuntimeConfig();
    const vuetifylocale = useLocale();

    return {
      config,
      vuetifylocale,
      locale,
    };
  },
  components: {
    thesnackbar,
  },
  data() {
    return {
      layoutname: "companylayout",
      themetype: "DarkTheme",
    };
  },

  created() {
    //if user changes the url we check here to make sure the vuetify is set too
    //if this is removed, when user changes en to fa in address bar , vuetify will not be effected untill refresh
    if (this.vuetifylocale.current.value != this.locale) {
      this.vuetifylocale.current.value = this.locale;
    }
    const exploderoute = this.$route.path.split("/");
    //exploderoute[0]  = baseurl
    //exploderoute[1] = locale
    //exploderoute[2] = layout
    console.log(exploderoute);
    if (exploderoute[2] == "auth") {
      this.layoutname = "authlayout";
    } else if (exploderoute[2] == undefined) {
      this.layoutname = "homelayout";
    } else if (exploderoute[2] == "company") {
      this.layoutname = "companylayout";
    }
  },

  mounted() {},

  watch: {
    $route(to, from) {
      console.log(to);
      const exploderoute = to.path.split("/");
      //exploderoute[0]  = baseurl
      //exploderoute[1] = locale
      //exploderoute[2] = layout
      if (exploderoute[2] == "auth") {
        this.layoutname = "authlayout";
      } else if (exploderoute[2] == undefined) {
        this.layoutname = "homelayout";
      } else if (exploderoute[2] == "company") {
        this.layoutname = "companylayout";
      }
    },
  },
};
</script>

<template>
  <v-app id="app">
    <NuxtLayout :name="layoutname">
      <thesnackbar>
        <NuxtPage />
      </thesnackbar>
    </NuxtLayout>
  </v-app>
</template>
