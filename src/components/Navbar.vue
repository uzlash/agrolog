<template>
  <!-- #009432 -->
  <div>
    <v-app-bar app elevation="0" color="white" class="navbar">
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        color="warning"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <div class="custom__test-div filter--green px-2">
        <v-app-bar-nav-icon>
          <v-img
            src="../assets/agrolog2.png"
            max-height="40"
            max-width="40"
          ></v-img>
        </v-app-bar-nav-icon>
        <v-toolbar-title class="text-h5 white--text">
          AgroLog
        </v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <v-tabs right color="success" class="hidden-sm-and-down">
        <v-tab to="/" class="d-flex flex-column" active-class="success--text">
          <span class="mb-n2 mt-1 text-capitalize caption">Home</span>
        </v-tab>
        <v-tab
          to="/about"
          class="d-flex flex-column"
          active-class="success--text"
        >
          <span class="mb-n2 mt-1 text-capitalize caption">About Us</span>
        </v-tab>
        <v-tab
          to="/activity"
          class="d-flex flex-column"
          active-class="success--text"
        >
          <span class="mb-n2 mt-1 text-capitalize caption">Our Activities</span>
        </v-tab>
        <v-tab
          to="/partner"
          class="d-flex flex-column"
          active-class="success--text"
        >
          <span class="mb-n2 mt-1 text-capitalize caption"
            >Our Business Partners</span
          >
        </v-tab>
        <v-tab
          to="/net"
          class="d-flex flex-column"
          active-class="success--text"
        >
          <span class="mb-n2 mt-1 text-capitalize caption"
            >Social Safety Nets</span
          >
        </v-tab>
        <v-tab
          to="/contact"
          class="d-flex flex-column"
          active-class="success--text"
        >
          <span class="mb-n2 mt-1 text-capitalize caption">Contact Us</span>
        </v-tab>
      </v-tabs>
      <div class="d-flex justify-center align-center">
        <!-- <v-btn small outlined color="success" class="mr-4">Sign in</v-btn> -->
        <v-btn
          small
          depressed
          color="warning"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdkINs4WMlK4bSQ6bljdtKzHVBIpvYVNUXRK_9PFs5XKIsFgA/viewform"
          >Register</v-btn
        >
      </div>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list nav dense>
        <v-list-item-group active-class="warning--text">
          <v-list-item to="/" class="mt-16">
            <v-list-item-title class="font-weight-light">
              Home
            </v-list-item-title>
          </v-list-item>
          <v-list-item
            v-for="(item, index) in navItems"
            :key="index"
            :to="item.route"
          >
            <v-list-item-title class="font-weight-light">{{
              item.name
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: [],
    drawer: false,
    navItems: [
      { name: 'About Us', route: '/about' },
      { name: 'Our Activities', route: '/activity' },
      { name: 'Our Business Partners', route: '/partner' },
      { name: 'Social Safety Nets', route: '/net' },
      { name: 'Contact Us', route: '/contact' },
    ],
  }),
  methods: {},
}
</script>

<style lang="scss">
.custom__test-div {
  display: flex !important;
  align-items: center !important;
}

.filter--green {
  filter: invert(20%) sepia(100%) saturate(1000%) hue-rotate(50deg)
    brightness(60%) contrast(100%);
}
.navbar {
  z-index: 50 !important;
}
</style>
