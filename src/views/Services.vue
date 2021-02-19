<template>
  <div class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card outlined tile class="custom__card">
            <h2 class="text-center text-h2 mt-12 white--text font-weight-thin">
              <span class="warning--text font-weight-light">Our</span> Services
            </h2>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card outlined tile min-height="40vh">
            <h2
              class="text-h6 font-weight-light pa-2 grey--text text--darken-3 text-center custom__heading-green"
            >
              Agrolog Hub Services
            </h2>
            <v-card-text class="body-1 pt-0">
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                  v-for="(item, i) in hubServices"
                  :key="i"
                >
                  <v-card tile outlined class="green lighten-5">
                    <v-card-title class="font-weight-light body-1">
                      {{ item.name }}
                    </v-card-title>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-card tile outlined class="green lighten-5">
                    <v-card-title class="font-weight-light body-1">
                      Produce Aggregation, Cleaning, washing, slicing,Drying
                      packaging and marketing
                    </v-card-title>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card tile outlined class="green lighten-5">
                    <v-card-title class="font-weight-light body-1">
                      Standardization and policy engagement with Government
                      agencies on Ginger VC
                    </v-card-title>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
            <h2
              class="text-h6 font-weight-light pa-2 grey--text text--darken-3 text-center custom__heading-orange"
            >
              Agrolog Service Centers
            </h2>
            <v-card-text class="body-1 pt-0">
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                  v-for="(item, i) in serviceCenters"
                  :key="i"
                >
                  <v-card tile outlined class="orange lighten-5">
                    <v-card-title class="font-weight-light body-1">
                      {{ item.name }}
                    </v-card-title>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-card tile outlined class="orange lighten-5">
                    <v-card-title class="font-weight-light body-1">
                      Postharvest processing, standardization and packaging
                    </v-card-title>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card tile outlined class="orange lighten-5">
                    <v-card-title class="font-weight-light body-1">
                      Support Women and youth in Enterpreneurial Development
                    </v-card-title>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    hubServices: [
      { name: 'Ginger Exports' },
      { name: 'ICT support and Data analysis' },
      { name: 'Training and Manpower Development' },
      { name: 'Research and Development' },
      { name: 'Monitoring and Evaluation' },
      { name: 'Quality Control' },
      { name: 'Gender Mainstreaming' },
      { name: 'Supply Chain Management' },
      { name: 'Warehouse receipt system' },
      { name: 'Input Credit' },
      { name: 'Linkages to input and output market' },
      { name: 'Out grower scheme' },
    ],
    serviceCenters: [
      { name: 'Agricultural Mechanization Services' },
      { name: 'Training on GAP' },
      { name: 'Training on primary processing' },
      { name: 'Farmer Aggregation and Profiling' },
      { name: 'Cooperative Development and Networking' },
      { name: 'Group Formation and strengthening' },
      { name: 'Extension Delivery Services' },
      { name: 'Farm Smart Agriculture' },
    ],
  }),
}
</script>

<style lang="scss">
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
