<template>
  <div class="custom__bg1 grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card outlined tile class="custom__card">
            <h2 class="text-center text-h2 mt-12 white--text font-weight-thin">
              <span class="warning--text font-weight-light">Our</span>
              Activities
            </h2>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card outlined tile min-height="40vh">
            <h2
              class="text-h6 font-weight-light pt-2 grey--text text--darken-3 text-center custom__heading-orange"
            >
              Our activities can be broadly classified into the categories below
            </h2>
            <v-card-text class="body-1 pt-0">
              <ol>
                <li>Farming</li>
                <li>Commodity trade</li>
                <li>Agrologistics</li>
                <li>Value chain development</li>
                <li>Cluster management</li>
                <li>Farm inputs management</li>
                <li>Vocational training</li>
              </ol>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card outlined tile min-height="50vh">
            <h2
              class="text-h6 font-weight-light pt-2 grey--text text--darken-3 text-center custom__heading-green"
            >
              On Site at Agrolog
            </h2>
            <v-card-text class="pt-0">
              <Carousel />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
export default {
  components: {
    Carousel,
  },
  data: () => ({}),
}
</script>

<style lang="scss">
.custom__bg1 {
  height: 100vh;
}

.custom__card {
  background: linear-gradient(rgba(0, 148, 50, 0.9), rgba(0, 148, 146, 0.7)),
    url('../assets/ginger.jpeg');
  -webkit-background: linear-gradient(
      rgba(0, 148, 50, 0.9),
      rgba(0, 148, 146, 0.7)
    ),
    url('../assets/ginger.jpeg');
  background-size: cover;
  //   background-attachment: fixed;
  height: 150px;
}
.custom__divider {
  width: 110px;
}
.custom__heading-green::after {
  display: block;
  height: 2px;
  width: 100px;
  background-color: #009432;
  content: ' ';
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 30px;
}

.custom__heading-orange::after {
  display: block;
  height: 2px;
  width: 100px;
  background-color: #f9952d;
  content: ' ';
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 30px;
}

.custom__heading-white::after {
  display: block;
  height: 2px;
  width: 100px;
  background-color: #ffffff;
  content: ' ';
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 30px;
}
</style>
