<template>
  <div class="custom__bg1 grey lighten-4">
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
            <p
              class="px-16 py-10 body-1 text-h6 font-weight-light grey--text text--darken-3"
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
