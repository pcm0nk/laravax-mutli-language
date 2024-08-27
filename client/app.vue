<script>
import { useCookie } from "nuxt/app";

const thesnackbar = defineAsyncComponent(() =>
  import("./components/reusable/snackbar.vue")
);
export default {
  setup() {
    const config = useRuntimeConfig();

    return {
      config,
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
    if (this.$route.name == "auth-signin") {
      this.layoutname = "authlayout";
    } else if (this.$route.path == "/") {
      this.layoutname = "homelayout";
    } else if (this.$route.path.indexOf("company") != -1) {
      this.layoutname = "companylayout";
    }
  },

  mounted() {},

  watch: {
    $route(to, from) {
      if (to.name == "auth-signin") {
        this.layoutname = "authlayout";
      } else if (to.path == "/") {
        this.layoutname = "homelayout";
      } else if (to.path.indexOf("company") != -1) {
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
