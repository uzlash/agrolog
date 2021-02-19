<template>
  <div class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card outlined tile class="custom__card">
            <h2
              class="text-center text-h3 text-md-h2 mt-12 white--text font-weight-thin"
            >
              Social Safety
              <span class="warning--text font-weight-light">Nets</span>
            </h2>
            <!-- <v-img height="200" src="../assets/ginger2.jpeg"></v-img> -->
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card outlined tile>
            <h2
              class="text-h6 font-weight-light pa-2 grey--text text--darken-3 text-center custom__heading-green"
            >
              AgroLog has developed initiatives that allow our farmers to invest
              a fraction of their harvest annually for guaranteed basic
              healthcare services, basic education and monthly stipends when
              they attain the statutory pensionable age. This can also serve as
              guarantees for loans etc.
            </h2>
            <v-card-text class="body-1 pt-0">
              <v-row>
                <v-col cols="12" md="4">
                  <v-card tile height="100%">
                    <v-card-title class="d-flex justify-center">
                      <v-icon size="100" color="orange lighten-2"
                        >mdi-account-cash-outline</v-icon
                      >
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                      <p
                        class="text-center text-h6 font-weight-light success--text mb-1"
                      >
                        Scholarship per child
                      </p>
                      <p class="text-center body-1">
                        3 bags of wet ginger
                      </p>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="4">
                  <v-card tile height="100%">
                    <v-card-title class="d-flex justify-center">
                      <v-icon size="100" color="orange lighten-2"
                        >mdi-heart-pulse</v-icon
                      >
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                      <p
                        class="text-center text-h6 font-weight-light success--text mb-1"
                      >
                        Health Care (Primary and Basic Surgeries)
                      </p>
                      <p class="text-center body-1">
                        4 bags per family member average total No. of bags to be
                        paid to the social foundation: 43 bags (for a family of
                        7)
                      </p>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="4">
                  <v-card tile height="100%">
                    <v-card-title class="d-flex justify-center">
                      <v-icon size="100" color="orange lighten-2"
                        >mdi-chart-areaspline</v-icon
                      >
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                      <p
                        class="text-center text-h6 font-weight-light success--text mb-1"
                      >
                        Social Investment Program
                      </p>
                      <p class="text-center body-1">
                        Five years in the social investment program qualifies a
                        farmer for monthly allowance when they attain the
                        statutory pensionable age
                      </p>
                    </v-card-text>
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
