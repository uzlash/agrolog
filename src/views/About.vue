<template>
  <div class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card outlined tile class="custom__card">
            <h2 class="text-center text-h2 mt-12 white--text font-weight-thin">
              About <span class="warning--text font-weight-light">Us</span>
            </h2>
            <!-- <v-img height="200" src="../assets/ginger2.jpeg"></v-img> -->
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card outlined tile min-height="50vh">
            <h2
              class="text-h6 font-weight-light pt-2 grey--text text--darken-3 text-center custom__heading-green"
            >
              OUR TEAM
            </h2>
            <v-row no-gutters justify="center">
              <v-col cols="3" class="d-flex flex-column align-center">
                <v-avatar size="200">
                  <v-img
                    height="100%"
                    src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                  >
                  </v-img
                ></v-avatar>
                <p class="mb-0 mt-2 grey--text text--darken-3 text-center">
                  Dr. Manzo Maigari
                </p>
                <p class="grey--text text--darken-1 text-center">
                  Chief Executive Officer
                </p>
              </v-col>
              <v-col cols="3" class="d-flex flex-column align-center">
                <v-avatar size="200">
                  <v-img
                    height="100%"
                    src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                  >
                  </v-img
                ></v-avatar>
                <p class="mb-0 mt-2 grey--text text--darken-3 text-center">
                  Dr. Manzo Maigari
                </p>
                <p class="grey--text text--darken-1 text-center">
                  Chief Executive Officer
                </p>
              </v-col>
              <v-col cols="3" class="d-flex flex-column align-center">
                <v-avatar size="200">
                  <v-img
                    height="100%"
                    src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                  >
                  </v-img
                ></v-avatar>
                <p class="mb-0 mt-2 grey--text text--darken-3 text-center">
                  Dr. Manzo Maigari
                </p>
                <p class="grey--text text--darken-1 text-center">
                  Chief Executive Officer
                </p>
              </v-col>
              <v-col cols="3" class="d-flex flex-column align-center">
                <v-avatar size="200">
                  <v-img
                    height="100%"
                    src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                  >
                  </v-img
                ></v-avatar>
                <p class="mb-0 mt-2 grey--text text--darken-3 text-center">
                  Dr. Manzo Maigari
                </p>
                <p class="grey--text text--darken-1 text-center">
                  Chief Executive Officer
                </p>
              </v-col>
            </v-row>
            <h2
              class="text-h6 font-weight-light pt-4 grey--text text--darken-3 text-center custom__heading-orange"
            >
              WHO WE ARE & WHAT WE DO
            </h2>
            <p
              class="px-16 text-h6 font-weight-light grey--text text--darken-3"
            >
              Agrolog Limited (RC 1527119) is a newly established agribusiness
              company specialized in production and trade of agricultural
              commodities, agrologistics, various agricultural investment and
              farm management. Innovations that assure the delivery of wholesome
              food to consumers constitute the value proposition which AgroLog
              brings to its clients. Institutional voids constitute great
              impediments in food systems, creating chaos and disruptions in the
              ecosystem. The desire to address this has taken us back to the
              fundamentals of food production: THE FARM. AgroLog seeks to
              entrench a culture of operational excellence that guarantees
              transparency from farm to table. The primary objective is
              traceability that ensures the consumer not only know the source
              but the quality of food on the table. Consequently AgroLog has
              contrived partnerships through Innovation Platforms (IPs) that
              bring farmers and investors together enabling ecosystems that
              allow for backward integration that builds farmers capacities,
              flow of quality inputs, standardization of practices that ensure
              high productivity and quality outputs. On the forward integration
              front we work with partner clusters to achieve best practices in
              postharvest handling that deliver quality to the table. Our
              initial focus is on vegetables but our network is growing to
              include commodities across the spectrum of agribusiness.
            </p>
            <h2
              class="text-h6 font-weight-light pt-4 grey--text text--darken-3 text-center custom__heading-green"
            >
              OUR MISSION
            </h2>
            <p
              class="px-16 text-h6 font-weight-light grey--text text--darken-3"
            >
              Agrolog Limited (RC 1527119) is a newly established agribusiness
              company specialized in production and trade of agricultural
              commodities, agrologistics, various agricultural investment and
              farm management. Innovations that assure the delivery of wholesome
              food to consumers constitute the value proposition which AgroLog
              brings to its clients. Institutional voids constitute great
              impediments in food systems, creating chaos and disruptions in the
              ecosystem. The desire to address this has taken us back to the
              fundamentals of food production: THE FARM. AgroLog seeks to
              entrench a culture of operational excellence that guarantees
              transparency from farm to table.
            </p>
            <h2
              class="text-h6 font-weight-light pt-4 grey--text text--darken-3 text-center custom__heading-orange"
            >
              OUR VISION
            </h2>
            <p
              class="px-16 text-h6 font-weight-light grey--text text--darken-3"
            >
              Agrolog Limited (RC 1527119) is a newly established agribusiness
              company specialized in production and trade of agricultural
              commodities, agrologistics, various agricultural investment and
              farm management. Innovations that assure the delivery of wholesome
              food to consumers constitute the value proposition which AgroLog
              brings to its clients. Institutional voids constitute great
              impediments in food systems, creating chaos and disruptions in the
              ecosystem. The desire to address this has taken us back to the
              fundamentals of food production: THE FARM. AgroLog seeks to
              entrench a culture of operational excellence that guarantees
              transparency from farm to table.
            </p>
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
