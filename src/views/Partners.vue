<template>
  <div class="custom__bg1 grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card outlined tile class="custom__card">
            <h2 class="text-center text-h2 mt-12 white--text font-weight-thin">
              <span class="warning--text font-weight-light">Our</span> Business
              Partners
            </h2>
            <!-- <v-img height="200" src="../assets/ginger2.jpeg"></v-img> -->
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card outlined tile min-height="40vh">
            <h2
              class="text-h6 font-weight-light pa-2 grey--text text--darken-3 text-center custom__heading-orange"
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
              <ol>
                <li>Commodity Cooperatives consortium</li>
                <li>Soya bean Farmers Association</li>
                <li>Gurara Ginger Association</li>
                <li>Kaduna State Cooperatives Federation</li>
                <li>Rice Farmers Association</li>
                <li>Groundnut Farmers Association</li>
                <li>Sorghum Farmers Association</li>
                <li>Turmeric farmers Association</li>
                <li>Fisheries Society of Nigeria</li>
                <li>Nigerian Agro Allied Farmers Association</li>
                <li>Cattle Breeders Association of Nigeria</li>
                <li>Poultry Association of Nigeria</li>
              </ol>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
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
