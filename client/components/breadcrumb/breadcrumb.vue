<script setup>
// Get the current route
</script>
<script>
export default {
  name: "breadcrumb",
  explodedPath: [],
};
</script>
<template>
  <div>
    <v-breadcrumbs density="compact" :items="explodedPath">
      <template v-slot:prepend> {{ $t("currentdirection") }}: </template>
      <template v-slot:title="{ item }">{{ $t(item.title) }} </template>
    </v-breadcrumbs>
  </div>
</template>
