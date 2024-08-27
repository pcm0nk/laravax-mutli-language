<script setup></script>
<script>
export default {
  name: "breadcrumb",
};
</script>
<template>
  <div>
    <v-breadcrumbs density="compact" :items="['Foo', 'Bar', 'Fizz']">
      <template v-slot:prepend> {{ $t("currentdirection") }}: </template>
    </v-breadcrumbs>
  </div>
</template>
