<template>
  <v-app>
    <header class="custom__bg">
      <v-row>
        <v-col cols="6">
          <v-card
            outlined
            tile
            height="100vh"
            class="pa-10 d-flex align-center justify-center mt-n16"
          >
            <v-card outlined tile color="transparent">
              <div class="text-h1 font-weight-light success--text">
                AGROLOG
              </div>
              <p class="text-h5 font-weight-light grey--text text--darken-2">
                Creating innovations to lift and transform the poor into the
                engine of economic growth.
              </p>
              <v-divider class="custom__divider success">&nbsp;</v-divider>
              <div class="mt-6">
                <v-btn tile depressed large color="success" class="mr-4">
                  EXPLORE
                </v-btn>
                <v-btn tile depressed outlined large color="warning">
                  Learn More
                </v-btn>
              </div>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </header>
    <section class="grey lighten-4">
      <v-container>
        <v-card outlined tile height="500px" color="white">
          <h2
            class="text-h3 font-weight-light pt-8 grey--text text--darken-3 text-center custom__heading-green"
          >
            WHO WE ARE
          </h2>
          <v-card-text class="mt-12">
            <v-row>
              <v-col cols="6">
                <v-card tile outlined class="mb-10 pa-2" color="transparent">
                  <h2 class="text-h5 success--text">About Us</h2>
                  <div class="black--text body-1 font-weight-light">
                    AGROLOG is a company registered in Nigeria with a vision to
                    create social innovations that will lift the rural poor out
                    of poverty and transform them into the engine of economic
                    growth.
                  </div>
                </v-card>
                <v-card tile outlined class="mb-10 pa-2" color="transparent">
                  <h2 class="text-h5 warning--text">Our Mission</h2>
                  <div class="black--text body-1 font-weight-light">
                    AGROLOG is a company registered in Nigeria with a vision to
                    create social innovations that will lift the rural poor out
                    of poverty and transform them into the engine of economic
                    growth.
                  </div>
                </v-card>
              </v-col>
              <v-col>
                <div class="composition">
                  <v-img
                    class="composition__photo composition__photo--p1"
                    src="../assets/ginger.jpeg"
                  ></v-img>
                  <v-img
                    class="composition__photo composition__photo--p2"
                    src="../assets/ginger2.jpeg"
                  ></v-img>
                  <v-img
                    class="composition__photo composition__photo--p3"
                    src="../assets/ginger3.jpeg"
                  ></v-img>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-container>
    </section>
    <section>
      <v-container>
        <v-card tile outlined color="white">
          <h2
            class="text-h3 font-weight-light pt-2 grey--text text--darken-3 text-center custom__heading-orange"
          >
            WHAT WE DO
          </h2>
          <v-card-text>
            <v-row>
              <v-col cols="12" class="mt-4">
                <v-card color="#C8E6C9" tile>
                  <v-row class="pa-4">
                    <v-col cols="3">
                      <v-card outlined tile height="100%">
                        <v-card-title class="d-flex flex-column align-center">
                          <v-icon color="#f9952d" size="50"
                            >mdi-chart-areaspline</v-icon
                          >
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                          We are growing community of smallholder farmers that
                          produce quality Ginger/Tumeric and soy beans
                          sustainably. All produce that meet the AgroLog seal of
                          quality are nurtured with a consciousness of a
                          tradition of responsibility at every stage from land
                          preparation to harvest.
                        </v-card-text>
                      </v-card>
                    </v-col>
                    <v-col cols="3">
                      <v-card outlined tile height="100%">
                        <v-card-title class="d-flex flex-column align-center">
                          <v-icon color="#f9952d" size="50"
                            >mdi-office-building-marker-outline</v-icon
                          >
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                          We operate a Ginger Hub at Kachia in Kaduna state
                          where produce is evaluated, graded, branded for the
                          market as well as for value addition. On the forward
                          integration front we work with partner clusters to
                          achieve best practices in postharvest handling that
                          deliver quality to the table.
                        </v-card-text>
                      </v-card>
                    </v-col>
                    <v-col cols="3">
                      <v-card outlined tile height="100%">
                        <v-card-title class="d-flex flex-column align-center">
                          <v-icon color="#f9952d" size="50"
                            >mdi-account-group-outline</v-icon
                          >
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                          Our community of farmers are organized in cooperative
                          clusters across 12 Local Government Areas that grow
                          ginger in Kaduna state. We have 10 service centers
                          that serve the needs of our farmers. Our initial focus
                          is on vegetables but our network is growing to include
                          commodities across the spectrum of agribusiness.
                        </v-card-text>
                      </v-card>
                    </v-col>
                    <v-col cols="3">
                      <v-card outlined tile height="100%">
                        <v-card-title class="d-flex flex-column align-center">
                          <v-icon color="#f9952d" size="50"
                            >mdi-cog-outline</v-icon
                          >
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                          The core of that tradition being aflatoxin free,
                          quality produce that meets global best practices and
                          standards. The overarching goal is create an
                          enterprise in farming for these smallholder farmers
                          with that assure them and their families of a future
                          that would otherwise remain elusive.
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-container>
    </section>
    <section class="grey lighten-4">
      <v-card tile outlined color="grey lighten-4">
        <h2
          class="text-h3 font-weight-light pt-4 grey--text text--darken-3 text-center custom__heading-green"
        >
          HOW YOU CAN JOIN US
        </h2>
        <v-card-text>
          <v-row>
            <v-col cols="6">
              <div class="text-center mt-16 text-h6 font-weight-light">
                AgroLog is open to partnership with institutional as well as
                individual investors and Donor organisations to structure
                financing packages for its small holder farmer members for
                returns and social impact. For details click below.
              </div>
              <div class="text-center mt-4">
                <v-btn color="success" small outlined tile>Click here</v-btn>
              </div>
            </v-col>
            <v-col cols="6">
              <v-card tile outlined color="white">
                <v-img
                  height="300"
                  contain
                  src="../assets/undraw_Forms_re_pkrt.svg"
                ></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </section>
    <section class="grey lighten-4">
      <v-card tile outlined color="white">
        <h2
          class="text-h3 font-weight-light pt-4 grey--text text--darken-3 text-center custom__heading-orange"
        >
          OUR SERVICES
        </h2>
        <v-card-text>
          <v-row>
            <v-col cols="6">
              <v-img
                height="300"
                contain
                src="../assets/undraw_services_5tv9(2).svg"
              ></v-img>
            </v-col>
            <v-col cols="6">
              <div class="text-center mt-16 text-h6 font-weight-light">
                Agrolog provides its community of farmers servces in both
                backward and forward integration components of the value chains.
                For details on services click below.
              </div>
              <div class="text-center mt-4">
                <v-btn color="#f9952d" small outlined tile>Click here</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </section>
    <section class="grey lighten-4">
      <v-card tile outlined color="white" class="custom__bg">
        <h2
          class="text-h3 font-weight-light pt-4 white--text text-center custom__heading-white"
        >
          OUR PROJECTIONS
        </h2>
        <v-card-text>
          <v-row justify="center" align="center">
            <v-col cols="8">
              <v-card
                height="400"
                tile
                elevation="10"
                color="transparent"
                class="pt-4"
              >
                <div
                  class="white--text d-flex flex-column align-center justify-center  my-4"
                >
                  <span class="text-h2 font-weight-thin">500,000</span>
                  <span class="text-h6 font-weight-light">
                    Youth and women farmers targeted by 2025</span
                  >
                </div>
                <v-divider class="white mx-16"></v-divider>
                <div
                  class="white--text d-flex flex-column align-center justify-center my-4"
                >
                  <span class="text-h2 font-weight-thin">5,000,000+</span>
                  <span class="text-h6 font-weight-light">
                    Jobs to be created</span
                  >
                </div>
                <v-divider class="white mx-16"></v-divider>
                <div
                  class="white--text d-flex flex-column align-center justify-center  my-4"
                >
                  <span class="text-h2 font-weight-thin">2,500,000</span>
                  <span class="text-h6 font-weight-light">
                    Youths and women to gain social security through the Social
                    Safety Nets</span
                  >
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </section>
    <v-footer dark padless>
      <v-card flat tile class="grey darken-3 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Agrolog</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
  }),
}
</script>

<style lang="scss">
.custom__bg {
  background: linear-gradient(rgba(0, 148, 50, 0.9), rgba(0, 148, 146, 0.7)),
    url('../assets/ginger.jpeg');
  -webkit-background: linear-gradient(
      rgba(0, 148, 50, 0.9),
      rgba(0, 148, 146, 0.7)
    ),
    url('../assets/ginger.jpeg');
  background-size: cover;
  background-attachment: fixed;
  height: calc(100vh - 64px);
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

.filter--green {
  filter: invert(20%) sepia(100%) saturate(1000%) hue-rotate(50deg)
    brightness(60%) contrast(100%);
}

.composition {
  position: relative;

  &__photo {
    width: 55%;
    height: 200px;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
    border-radius: 0.2rem;
    position: absolute;
    z-index: 10;
    transition: all 0.2s;
    outline-offset: 2rem;

    &--p1 {
      left: 0;
      top: -2rem;
    }
    &--p2 {
      right: 0;
      top: 2rem;
    }
    &--p3 {
      left: 20%;
      top: 5rem;
    }

    &:hover {
      outline: 1px solid #f9952d;
      transform: scale(1.05) translateY(-0.5rem);
      box-shadow: 0 2.5rem 4rem rgba(0, 0, 0, 0.5);
      z-index: 20;
    }
  }

  &:hover &__photo:not(:hover) {
    transform: scale(0.95);
  }
}
</style>
