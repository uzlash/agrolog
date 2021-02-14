<template>
  <div class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card outlined tile class="custom__card">
            <h2 class="text-center text-h2 mt-12 white--text font-weight-thin">
              <span class="warning--text font-weight-light">Our</span> Business
              Partners
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
              AgroLog works with both private and public stakeholders in
              agriculture to increase food security, quality, brand development
              and promote Nigerian agro export. We cater for customers all over
              the globe, supplying agricultural commodities. We are the
              heartbeat of the agricultural industry not only in Nigeria but in
              the entire African continent. Agrolog is in the business of
              promoting and supporting Sustainable agriculture and food
              production in our continent. Our Company works with various
              farmers in our network in Nigeria. The farmers comprise the
              following associations below
            </h2>
            <v-card-text class="body-1 pt-0">
              <v-row>
                <v-col cols="4" v-for="(partner, i) in partners" :key="i">
                  <v-card tile outlined class="green lighten-5">
                    <v-card-title class="font-weight-light body-1">
                      {{ partner.name }}
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
    partners: [
      { name: 'Commodity Cooperatives consortium' },
      { name: 'Soya bean Farmers Association' },
      { name: 'Gurara Ginger Association' },
      { name: 'Kaduna State Cooperatives Federation' },
      { name: 'Rice Farmers Association' },
      { name: 'Groundnut Farmers Association' },
      { name: 'Sorghum Farmers Association' },
      { name: 'Tumeric Farmers Association' },
      { name: 'Fisheries Society of Nigeria' },
      { name: 'Nigerian Agro Allied Farmers Association' },
      { name: 'Cattle Breeders Association of Nigeria' },
      { name: 'Poultry Association of Nigeria' },
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
