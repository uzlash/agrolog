<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-app class="grey lighten-4">
        <transition name="slide-fade">
          <router-view></router-view>
        </transition>
      </v-app>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar,
  },
  data: () => ({}),
}
</script>

<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-fade-leave-active {
  transition: all 0.2s ease-out;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(1000px);
  opacity: 0;
}
</style>
