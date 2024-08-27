<script>
export default {
  components: {
    themecolor: defineAsyncComponent(() => import("../theme/themecolor.vue")),
    breadcrumb: defineAsyncComponent(() =>
      import("../breadcrumb/breadcrumb.vue")
    ),
    changelanguage: defineAsyncComponent(() =>
      import("../multilanguage/changelanguage.vue")
    ),
  },
};
</script>
<template>
  <div>
    <v-toolbar dense class="elevation-0 px-3">
      <v-toolbar-title class="px-8">
        <breadcrumb />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row justify="end" align="center">
        <v-col cols="3" class="text-center">
          <changelanguage />
        </v-col>
        <v-col cols="1">
          <themecolor />
        </v-col>
      </v-row>
    </v-toolbar>
  </div>
</template>
