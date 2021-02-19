<template>
  <div class="grey lighten-4">
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
              class="text-h6 font-weight-light pt-2 grey--text text--darken-3 text-center custom__heading-green"
            >
              Our activities can be broadly classified into the categories below
            </h2>
            <v-card-text class="body-1 pt-0">
              <v-row>
                <v-col cols="12" md="6">
                  <v-img
                    contain
                    src="../assets/undraw_environmental_study_skau.svg"
                  ></v-img
                ></v-col>
                <v-col cols="12" md="6">
                  <v-row>
                    <v-col cols="12" sm="6" md="3">
                      <v-card class="orange lighten-5">
                        <v-card-title class="font-weight-light body-1">
                          Farming
                        </v-card-title>
                      </v-card>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-card class="orange lighten-5">
                        <v-card-title class="font-weight-light body-1">
                          Commodity trade
                        </v-card-title>
                      </v-card>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-card class="orange lighten-5">
                        <v-card-title class="font-weight-light body-1">
                          Agrologistics
                        </v-card-title>
                      </v-card>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-card class="orange lighten-5">
                        <v-card-title class="font-weight-light body-1">
                          Value chain development
                        </v-card-title>
                      </v-card>
                    </v-col>
                    <v-col cols="12" sm="6" md="5">
                      <v-card class="orange lighten-5">
                        <v-card-title class="font-weight-light body-1">
                          Cluster management
                        </v-card-title>
                      </v-card>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-card class="orange lighten-5">
                        <v-card-title class="font-weight-light body-1">
                          Farm inputs management
                        </v-card-title>
                      </v-card>
                    </v-col>
                    <v-col cols="12" sm="6" md="5">
                      <v-card class="orange lighten-5">
                        <v-card-title class="font-weight-light body-1">
                          Vocational training
                        </v-card-title>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <h2
                class="text-h6 font-weight-light pt-4 grey--text text--darken-3 text-center custom__heading-orange"
              >
                On Site at Agrolog
              </h2>
              <Carousel :slides="slides" />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <!-- <v-row>
        <v-col cols="12">
          <v-card outlined tile min-height="50vh">
          </v-card>
        </v-col>
      </v-row> -->
    </v-container>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel-img'
export default {
  components: {
    Carousel,
  },
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
