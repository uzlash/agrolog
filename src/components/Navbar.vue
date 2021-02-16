<template>
  <!-- #009432 -->
  <v-app-bar app elevation="0" color="white" class="navbar">
    <div class="custom__test-div filter--green px-2">
      <v-app-bar-nav-icon>
        <v-img
          src="../assets/agrolog2.png"
          max-height="40"
          max-width="40"
        ></v-img>
      </v-app-bar-nav-icon>
      <v-toolbar-title class="text-h5 white--text">
        Agrolog
      </v-toolbar-title>
    </div>
    <!-- <v-spacer></v-spacer> -->
    <v-tabs right color="success">
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
      <v-tab to="/net" class="d-flex flex-column" active-class="success--text">
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
    <div class="d-flex ml-8">
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
</template>

<script>
export default {
  data: () => ({
    icons: [],
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
