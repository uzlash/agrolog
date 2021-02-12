<template>
  <carousel-3d
    :height="300"
    :width="400"
    :border="1"
    :autoplay="true"
    :autoplay-timeout="2400"
  >
    <slide
      v-for="(slide, i) in slides"
      :index="i"
      :key="i"
      class="carousel-3d-slide"
    >
      <v-img @click="clickMe(i)" :src="slide.src"></v-img>
    </slide>
  </carousel-3d>
</template>

<script>
export default {
  data: () => ({
    slides: [
      { src: require('../assets/activity1.png') },
      { src: require('../assets/activity2.png') },
      { src: require('../assets/activity3.png') },
      { src: require('../assets/activity4.png') },
      { src: require('../assets/activity5.png') },
      { src: require('../assets/activity6.png') },
      { src: require('../assets/activity7.png') },
    ],
  }),
  methods: {
    clickMe(id) {
      console.log('Clicked Slide: ', id)
    },
  },
}
</script>

<style lang="scss">
.carousel-3d-slide {
  height: 100% !important;
}
</style>
