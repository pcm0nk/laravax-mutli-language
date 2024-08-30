<script>
import { useMainStore } from "@/store/mainstore";

export default {
  setup() {
    const localePath = useLocalePath();
    const { locale, setLocale } = useI18n();
    const store = useMainStore();
    return { locale, setLocale, localePath, store };
  },
  data() {
    return {
      firstnav: true,
      hoverit: true,
      menuarray: [
        {
          id: 0,
          text: this.$t("navigation.organizationchart"),
          icon: "mdi-family-tree",
          iconappend: "mdi-chevron-right",
          active: false,
          to: "",
        },
        {
          id: 99,
          text: this.$t("navigation.logout"),
          icon: "mdi-logout",
          iconappend: "",
          active: false,
          to: "",
        },
      ],
      submenuarray: [
        {
          id: 0,
          menuid: 0,
          text: this.$t("navigation.actions"),
          value: "actions",
          menuoption: [
            {
              opid: 0,
              icon: "mdi-circle-small",
              text: this.$t("navigation.charts"),
              to: "company-charts",
            },
          ],
        },
        {
          id: 1,
          menuid: 0,
          text: this.$t("navigation.basicinfo"),
          value: "basicinfo",
          menuoption: [
            {
              text: this.$t("navigation.levels"),
              opid: 0,
              to: "company-basicinfo",
              icon: "mdi-circle-small",
            },
            {
              text: this.$t("navigation.topcharts"),
              opid: 1,
              to: "company-topchart",
              icon: "mdi-circle-small",
            },
          ],
        },
        {
          id: 2,
          menuid: 0,
          value: "reports",
          text: this.$t("navigation.reports"),
          menuoption: [],
        },
      ],
      secondnav: false,
      open: ["actions", "basicinfo", "reports"], // each menu has this section
      admins: [
        ["Management", "mdi-account-multiple-outline"],
        ["Settings", "mdi-cog-outline"],
      ],
      cruds: [
        ["Create", "mdi-plus-outline"],
        ["Read", "mdi-file-outline"],
        ["Update", "mdi-update"],
        ["Delete", "mdi-delete"],
      ],
    };
  },

  methods: {
    secondnavaction(item, theid) {
      debugger
      this.store.breadcrumb['secondmenu']['value'] = item.text
      this.store.breadcrumb['secondmenu']['id'] = theid
      this.secondnav = false
      navigateTo(this.localePath(item.to))
    },
    onClickOutside() {
      this.secondnav = false
    },
    onCloseConditional() {
      return true
    },
    runsecondnav(index, id) {
      if (id == 99) {
        useApi().logout()
        return false
      }
      this.store.breadcrumb["mainmenu"]["value"] = this.menuarray[index]["text"]
      this.store.breadcrumb["mainmenu"]["id"] = this.menuarray[index]["id"]
      this.hoverit = false
      this.secondnav = true
      this.menuarray[index]["active"] = true
    },
  },
};
</script>
<template>
  <div>
    <v-navigation-drawer rail @mouseleave="hoverit = true" :model-value="firstnav" :expand-on-hover="hoverit"
      color="navcolor">
      <v-list slim nav class="py-0">
        <v-list-item nav slim prepend-avatar="https://randomuser.me/api/portraits/women/34.jpg"></v-list-item>
      </v-list>
      <v-divider></v-divider>

      <v-list density="compact" nav justify="center">
        <template v-for="(item, index) in menuarray" :key="index">
          <v-list-item nav class="body-1" :active="item.active" @click="runsecondnav(index, item.id)">
            <template v-slot:prepend>
              <v-icon>{{ item.icon }}</v-icon>
            </template>
            <template v-slot:title>
              <span class="text-body-1">{{ item.text }}</span>
            </template>
            <template v-slot:append v-if="item.iconappend != ''">
              <v-icon>{{ item.iconappend }}</v-icon>
            </template>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-no-ssr>
      <v-navigation-drawer :temporary="true" color="secondnavcolor" @mouseleave="secondnav = false"
        :model-value="secondnav">
        <v-list v-click-outside="{
          handler: onClickOutside,
          closeConditional: onCloseConditional,
        }" v-if="secondnav" v-model:opened="open" open-strategy="multiple">
          <v-list-group v-for="(sitem, index) in submenuarray" :value="sitem.value" :key="sitem.value">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" class="text-body-2 text--on-surface" :title="sitem.text" color="on-surface">
              </v-list-item>
            </template>
            <v-list-item v-for="(mitem, indexm) in sitem.menuoption" :key="mitem.opid"
              @click="secondnavaction(mitem, indexm)">
              <v-list-item-title class="text-subtitle-2">
                <v-icon :icon="mitem.icon"></v-icon>
                {{ mitem.text }}
              </v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
    </v-no-ssr>
  </div>
</template>
<style>
.v-locale--is-rtl .v-list-item__append i {
  transform: rotate(180deg);
}
</style>