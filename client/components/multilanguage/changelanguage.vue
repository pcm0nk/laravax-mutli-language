<script setup>
import { useCookie } from "nuxt/app";
import { useI18n } from "vue-i18n";
import { useLocale } from "vuetify";
const { locale, setLocale } = useI18n();
const vuetifylocale = useLocale();
const items = [
  {
    value: "en",
    name: "English",
  },
  {
    value: "fa",
    name: "فارسی",
  },
];

async function changelocale(newlocale) {
  console.log(newlocale);
  setLocale(newlocale.value);
  vuetifylocale.current.value = newlocale.value;
}
</script>
<script>
export default {
  name: "changelanguage",
};
</script>
<template>
  <div>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn variant="plain" v-bind="props" rounded>
          <v-icon class="mx-1">mdi-web</v-icon>
          {{ $t("currentlanguage") }}
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
          @click="changelocale(item)"
        >
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
