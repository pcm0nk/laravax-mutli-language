<script setup>
import { useTheme } from "vuetify";
const theme = useTheme();
let themetype = useCookie("themetype");

async function toggleTheme() {
  if (theme.current.value.dark == false) {
    theme.global.name.value = "DarkTheme";
    themetype = "DarkTheme";
  } else {
    theme.global.name.value = "LightTheme";
    themetype = "LightTheme";
  }
}
</script>
<script>
export default {
  name: "themecolor",
};
</script>
<template>
  <div>
    <v-col cols="1">
      <v-btn variant="plain" icon @click="toggleTheme">
        <v-icon v-if="theme.global.name.value == 'LightTheme'">
          mdi-weather-night
        </v-icon>
        <v-icon v-if="theme.global.name.value == 'DarkTheme'">
          mdi-weather-sunny
        </v-icon>
      </v-btn>
    </v-col>
  </div>
</template>
