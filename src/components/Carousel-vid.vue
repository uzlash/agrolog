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
      <video @click="clickMe(slide)" :src="slide.src"></video>
    </slide>
  </carousel-3d>
</template>

<script>
export default {
  props: ['slides'],
  data: () => ({}),
  methods: {
    clickMe(slide) {
      console.log('Clicked Slide: ', slide.src)
    },
  },
}
</script>

<style lang="scss">
.carousel-3d-slide {
  height: 100% !important;
}
</style>
