<script setup lang="ts">
const localePath = useLocalePath()
</script>
<script lang="ts">
export default defineComponent({
  methods: {
    async logmein(): Promise<void> {
      const userinfo = { email: "pcmonk@example.com", password: "123456" };
      //  await useApi().login(userinfo); error
    },
  },
});
</script>
<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="text-h1 text-surface-darken-1 text-center">
          {{ $t("home") }}
        </h1>
      </v-col>
      <v-col cols="3" class="my-3 text-center">
        <v-btn @click="login" :to="localePath('auth-signin')" block class="primary">{{
          $t("auth.login")
        }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
