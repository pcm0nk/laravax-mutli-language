<script setup>
import { computed } from 'vue'
import { useMainStore } from '@/store/mainstore';
defineOptions({
  name: 'bread-crumb',
})
const store = useMainStore()
let thepath = computed(() => [
  { title: store.breadcrumb.mainmenu.value }, { title: store.breadcrumb.secondmenu.value }
])


</script>

<template>
  <div>
    <v-breadcrumbs density="compact" :items="thepath">
      <template v-slot:prepend> {{ $t("currentdirection") }}: </template>
      <template v-slot:title="{ item }">{{ item.title }} </template>
    </v-breadcrumbs>
  </div>
</template>
