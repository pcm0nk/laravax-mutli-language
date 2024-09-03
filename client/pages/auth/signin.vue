<script>
import { useSnackbar } from "~/composables/useSnackbar";
import { useMainStore } from "@/store/mainstore";
export default {
  name: "sign-in",
  setup() {
    const store = useMainStore();
    const createSnackbar = useSnackbar();

    return {
      createSnackbar,
      store,
    };
  },
  data() {
    return {
      thetype: "login",
      email: null,
      password: null,
      loading: false,
      validit: false,
    };
  },
  methods: {
    async login() {
      this.loading = true;
      if (
        this.email != null &&
        this.password != null &&
        this.password != "" &&
        this.email != ""
      ) {
        const userinfo = { email: this.email, password: this.password };
        const result = await useApi().login(userinfo);
      } else {
        this.loading = false;
        this.createSnackbar("ایمیل و رمز عبور الزامی است", {
          snackbarcolor: "error",
        });
      }
    },
  },
};
</script>
<template>
  <v-container class="fill-height">
    <v-row align="center">
      <v-col md="4" cols="12" align-self="center">
        <v-form autocomplete="off" :model-value="validit" @keydown.enter="login">
          <v-card min-height="320px" class="elevation-3" flat style="background-color: #0201041a !important">
            <v-card-title class="text-center mb-4">
              <v-img height="160px" class="mt-4 mb-4" src="/pwalogo.png"></v-img>
              <span class="text-h5 text-white" v-if="thetype == 'login'">
                {{ $t("auth.logintosystem") }}
              </span>
            </v-card-title>
            <v-card-text class="pb-0 mb-0">
              <v-text-field variant="outlined" color="#ffffff" :rules="store.emailregex" v-model="email"
                class="mb-2 white-text">
                <template v-slot:label>
                  <p class="text-white text-subtitle 1">
                    {{ $t("auth.email") }}
                  </p>
                </template>
              </v-text-field>
              <v-text-field variant="outlined" :rules="store.numberregex" color="#ffffff" type="password"
                v-model="password" class="mb-2">
                <template v-slot:label>
                  <p class="text-white text-subtitle 1">
                    {{ $t("auth.password") }}
                  </p>
                </template>
              </v-text-field>
            </v-card-text>
            <v-card-actions class="pb-3">
              <v-row>
                <v-col cols="12" md="8" class="pt-0 text-white pr-8 pb-8">
                  <p @click="" class="text-subtitle-2 mb-2 text-white">
                    <span style="cursor: pointer">
                      {{ $t("auth.register") }}
                    </span>
                  </p>
                  <p @click="" class="text-subtitle-2 text-white">
                    <span style="cursor: pointer">
                      {{ $t("auth.forgotpassword") }}
                    </span>
                  </p>
                </v-col>
                <v-col cols="12" md="4" class="pt-0 text-center text-white">
                  <v-btn block :disable="loading" @click="login" color="white" label="Login" variant="outlined">
                    <template v-slot="loader">
                      <span v-if="loading"> {{ $t("loading") }} </span>
                      <span v-else> {{ $t("auth.login") }} </span>
                    </template>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
:deep(.v-field__outline__start) {
  border-color: white !important;
}

:deep(.v-field__outline__notch::before),
:deep(.v-field__outline__notch::after) {
  border-color: white !important;
}

:deep(.v-field__outline__end) {
  border-color: white !important;
}

:deep(.v-field--dirty) {
  color: white;
}
</style>
