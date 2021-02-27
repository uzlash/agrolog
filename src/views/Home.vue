<template>
  <div>
    <header class="custom__bg">
      <v-row>
        <v-col cols="12" md="6">
          <v-card
            outlined
            tile
            color="transparent"
            height="100vh"
            class="pa-10 d-flex align-center justify-center mt-n16"
          >
            <v-card outlined tile color="transparent">
              <div
                class="text-h3 text-md-h2 text-lg-h1 font-weight-light white--text"
              >
                AGROLOG
              </div>
              <p class="text-h5 font-weight-light grey--text text--lighten-3">
                Creating innovations to lift and transform the poor into the
                engine of economic growth.
              </p>
              <v-divider class="custom__divider white">&nbsp;</v-divider>
              <div class="mt-6">
                <v-btn
                  href="#who__we__are"
                  tile
                  depressed
                  large
                  color="white success--text"
                  class="mr-4"
                >
                  EXPLORE
                </v-btn>
                <v-btn
                  href="#agrolog__projects"
                  tile
                  depressed
                  outlined
                  large
                  color="white"
                >
                  Learn More
                </v-btn>
              </div>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </header>
    <!-- WHO WE ARE -->
    <section class="grey lighten-4" id="who__we__are">
      <v-container>
        <v-card
          outlined
          tile
          min-height="500px"
          color="white"
          data-aos="fade-up"
        >
          <h2
            class="text-h5 text-md-h4 font-weight-light pt-8 grey--text text--darken-3 text-center custom__heading-green"
          >
            WHO WE ARE
          </h2>
          <v-card-text class="mt-12">
            <v-row>
              <v-col cols="12" md="6">
                <v-card
                  tile
                  outlined
                  class="mb-10 pa-2"
                  color="transparent"
                  data-aos="fade-up"
                >
                  <h2 class="text-h5 success--text">About Us</h2>
                  <div
                    class="grey--text text--darken-3 text-body-1 text-md-h6 font-weight-light font-weight-light"
                  >
                    AGROLOG is a company registered in Nigeria with a vision to
                    create social innovations that will lift the rural poor out
                    of poverty and transform them into the engine of economic
                    growth. Our mission is to create platforms, opportunities
                    and sustainable agribusinesses that will drive economic
                    growth.
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4" class="hidden-md-and-up">
                <v-img src="../assets/ginger.jpeg"></v-img>
              </v-col>
              <v-col cols="12" sm="4" class="hidden-md-and-up">
                <v-img src="../assets/ginger2.jpeg"></v-img>
              </v-col>
              <v-col cols="12" sm="4" class="hidden-md-and-up">
                <v-img src="../assets/ginger3.jpeg"></v-img>
              </v-col>
              <v-col cols="12" md="6" class="hidden-sm-and-down">
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
    <!-- WHAT WE DO -->
    <section class="white">
      <v-container>
        <v-card tile outlined color="white">
          <h2
            class="text-h5 text-md-h4 font-weight-light pt-2 grey--text text--darken-3 text-center custom__heading-orange"
          >
            WHAT WE DO
          </h2>
          <v-card-text>
            <v-row>
              <v-col cols="12" class="mt-4">
                <v-card color="#C8E6C9" tile>
                  <v-row class="pa-4">
                    <v-col cols="12" sm="6" md="6" lg="3">
                      <v-card outlined tile height="100%" data-aos="fade-right">
                        <v-card-title class="d-flex flex-column align-center">
                          <v-icon color="#f9952d" size="50"
                            >mdi-chart-areaspline</v-icon
                          >
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text class="text-body-2 text-md-body-1">
                          We are growing community of smallholder farmers that
                          produce quality Ginger/Tumeric and soy beans
                          sustainably. All produce that meet the AgroLog seal of
                          quality are nurtured with a consciousness of a
                          tradition of responsibility at every stage from land
                          preparation to harvest.
                        </v-card-text>
                      </v-card>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" lg="3">
                      <v-card outlined tile height="100%" data-aos="fade-right">
                        <v-card-title class="d-flex flex-column align-center">
                          <v-icon color="#f9952d" size="50"
                            >mdi-office-building-marker-outline</v-icon
                          >
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text class="text-body-2 text-md-body-1">
                          We operate a Ginger Hub at Kachia in Kaduna state
                          where produce is evaluated, graded, branded for the
                          market as well as for value addition. On the forward
                          integration front we work with partner clusters to
                          achieve best practices in postharvest handling that
                          deliver quality to the table.
                        </v-card-text>
                      </v-card>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" lg="3">
                      <v-card outlined tile height="100%" data-aos="fade-left">
                        <v-card-title class="d-flex flex-column align-center">
                          <v-icon color="#f9952d" size="50"
                            >mdi-account-group-outline</v-icon
                          >
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text class="text-body-2 text-md-body-1">
                          Our community of farmers are organized in cooperative
                          clusters across 12 Local Government Areas that grow
                          ginger in Kaduna state. We have 10 service centers
                          that serve the needs of our farmers. Our initial focus
                          is on vegetables but our network is growing to include
                          commodities across the spectrum of agribusiness.
                        </v-card-text>
                      </v-card>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" lg="3">
                      <v-card outlined tile height="100%" data-aos="fade-left">
                        <v-card-title class="d-flex flex-column align-center">
                          <v-icon color="#f9952d" size="50"
                            >mdi-cog-outline</v-icon
                          >
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text class="text-body-2 text-md-body-1">
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
    <!-- AGROLOG-MASTERCARD GINGER VALUE CHAIN PROJECT -->
    <section id="agrolog__projects">
      <v-container>
        <v-card tile outlined color="white">
          <h2
            class="text-h5 text-md-h4 font-weight-light pt-2 grey--text text--darken-3 text-center custom__heading-green"
          >
            AGROLOG-MASTERCARD GINGER VALUE CHAIN PROJECT
          </h2>
          <v-card-text>
            <v-carousel
              show-arrows
              height="auto"
              hide-delimiter-background
              light
            >
              <v-carousel-item>
                <v-row>
                  <v-col cols="12" sm="6">
                    <iframe
                      width="100%"
                      height="310"
                      src="https://www.youtube.com/embed/guLWS2hD1mE"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <iframe
                      width="100%"
                      height="310"
                      src="https://www.youtube.com/embed/93H4QrBtlys"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe
                  ></v-col>
                </v-row>
              </v-carousel-item>
              <v-carousel-item>
                <v-row>
                  <v-col cols="12" sm="6">
                    <iframe
                      width="100%"
                      height="310"
                      src="https://www.youtube.com/embed/0cvOc_s67Ko"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <iframe
                      width="100%"
                      height="310"
                      src="https://www.youtube.com/embed/__84dO5VYjQ"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe
                  ></v-col>
                </v-row>
              </v-carousel-item>
              <v-carousel-item>
                <v-row>
                  <v-col cols="12" sm="6">
                    <iframe
                      width="100%"
                      height="310"
                      src="https://www.youtube.com/embed/JfTZNttAayA"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <iframe
                      width="100%"
                      height="310"
                      src="https://www.youtube.com/embed/QyHWVrHFloA"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe
                  ></v-col>
                </v-row>
              </v-carousel-item>
              <v-carousel-item>
                <v-row>
                  <v-col cols="12" sm="6">
                    <iframe
                      width="100%"
                      height="310"
                      src="https://www.youtube.com/embed/NJs_Gd80EBQ"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </v-col>
                </v-row>
              </v-carousel-item>
            </v-carousel>
            <div></div>
          </v-card-text>
        </v-card>
      </v-container>
    </section>
    <!-- OUR SERVICES -->
    <section class="grey lighten-4">
      <v-card tile outlined color="white">
        <h2
          class="text-h5 text-md-h4 font-weight-light pt-4 grey--text text--darken-3 text-center custom__heading-orange"
        >
          OUR SERVICES
        </h2>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="6">
              <!-- <v-img
                height="300"
                contain
                src="../assets/undraw_services_5tv9(2).svg"
              ></v-img> -->
              <v-card tile outlined data-aos="flip-up">
                <v-img
                  height="300"
                  width="100%"
                  src="../assets/farming_women.jpg"
                ></v-img>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6">
              <div
                class="text-center mt-16 text-body-1 text-md-h6 font-weight-light"
                data-aos="flip-down"
              >
                Agrolog provides its community of farmers servces in both
                backward and forward integration components of the value chains.
                For details on services click below.
              </div>
              <div class="text-center mt-4">
                <v-btn @click="goServices()" color="#f9952d" small outlined tile
                  >Click here</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </section>
    <!-- HOW YOU CAN JOIN US -->
    <section class="grey lighten-4">
      <v-card tile outlined color="grey lighten-4">
        <h2
          class="text-h5 text-md-h4 font-weight-light pt-4 grey--text text--darken-3 text-center custom__heading-green"
        >
          HOW YOU CAN JOIN US
        </h2>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="6">
              <div
                class="text-center mt-16 text-body-1 text-md-h6 font-weight-light"
                data-aos="flip-down"
              >
                AgroLog is open to partnership with institutional as well as
                individual investors and Donor organisations to structure
                financing packages for its small holder farmer members for
                returns and social impact. For details click below.
              </div>
              <div class="text-center mt-4">
                <v-btn
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdkINs4WMlK4bSQ6bljdtKzHVBIpvYVNUXRK_9PFs5XKIsFgA/viewform"
                  color="success"
                  small
                  outlined
                  tile
                  >Click here</v-btn
                >
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <v-card tile outlined color="white" data-aos="flip-up">
                <!-- <v-card color="transparent" tile outlined>
                  <v-img
                    height="300"
                    width="100%"
                    src="../assets/join_us.jpg"
                  ></v-img>
                </v-card> -->
                <v-img
                  height="300"
                  contain
                  src="../assets/undraw_fill_forms_yltj.svg"
                ></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </section>
    <!-- OUR PROJECTIONS -->
    <section class="grey lighten-4">
      <v-card tile outlined color="white" class="custom__bg-1">
        <h2
          class="text-h5 text-md-h4 font-weight-light pt-4 white--text text-center custom__heading-white"
        >
          <span class="warning--text font-weight-light">OUR</span> PROJECTIONS
        </h2>
        <v-card-text>
          <v-row justify="center" align="center">
            <v-col cols="10">
              <v-card
                tile
                elevation="10"
                color="transparent"
                class="py-4"
                data-aos="zoom-in"
              >
                <div
                  class="white--text d-flex flex-column align-center justify-center  my-4"
                >
                  <span class="text-h4 text-sm-h3 text-md-h2 font-weight-thin"
                    >500,000</span
                  >
                  <span
                    class="text-body-2 text-sm-body-1 text-md-h6 font-weight-light text-center"
                  >
                    Youth and women farmers targeted by 2025</span
                  >
                </div>
                <v-divider class="white mx-16"></v-divider>
                <div
                  class="white--text d-flex flex-column align-center justify-center my-4"
                >
                  <span class="text-h4 text-sm-h3 text-md-h2 font-weight-thin"
                    >5,000,000+</span
                  >
                  <span
                    class="text-body-2 text-sm-body-1 text-md-h6 font-weight-light text-center"
                  >
                    Jobs to be created</span
                  >
                </div>
                <v-divider class="white mx-16"></v-divider>
                <div
                  class="white--text d-flex flex-column align-center justify-center  my-4"
                >
                  <span class="text-h4 text-sm-h3 text-md-h2 font-weight-thin"
                    >2,500,000</span
                  >
                  <span
                    class="text-body-2 text-sm-body-1 text-md-h6 font-weight-light text-center"
                  >
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
    <!-- OUR PARTNERS -->
    <section id="agrolog__partners">
      <div class="white mt-1">
        <v-row class="pa-2">
          <v-col
            cols="12"
            sm="4"
            md="3"
            class="d-flex justify-center align-center"
          >
            <v-card color="transparent" class="pa-2" tile>
              <h3 class="text-h6 text-md-h5 text-center font-weight-light">
                Trusted fully by our partners across Africa & beyond
              </h3>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4" md="1">
            <v-img contain src="../assets/gurara.jpeg" height="100"></v-img>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <v-img
              contain
              src="../assets/harvestfield.jpeg"
              height="100"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <v-img contain src="../assets/nabg.jpeg" height="100"></v-img>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <v-img contain src="../assets/ocp.jpeg" height="100"></v-img>
          </v-col>
          <v-col cols="12" sm="4" md="1">
            <v-img
              contain
              src="../assets/palm_valley.jpeg"
              height="100"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="4" md="1">
            <v-img contain src="../assets/greysoft.jpeg" height="100"></v-img>
          </v-col>
        </v-row>
      </div>
    </section>
    <!-- FOOTER -->
    <v-footer dark padless>
      <v-card flat tile class="grey darken-3 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="item in footerItems"
            :key="item.href"
            class="mx-4 white--text"
            icon
            :href="item.href"
          >
            <v-icon size="24px">
              {{ item.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text
          class="white--text pt-0 text-body-2 text-sm-body-1 font-weight-light"
        >
          Agrolog Limited (RC 1527119) is a newly established agribusiness
          company specialized in production and trade of agricultural
          commodities, agrologistics, various agricultural investment and farm
          management. Innovations that assure the delivery of wholesome food to
          consumers constitute the value proposition which AgroLog brings to its
          clients.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text body-1">
          {{ new Date().getFullYear() }} —
          <strong class="success--text mr-4">Agrolog</strong>
          <span>
            <v-btn small outlined href="https://agrolog.farm:2096/">
              <v-icon class="mr-1">mdi-email</v-icon>
              <span class="text-capitalize">Check Mail</span>
            </v-btn>
          </span>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    footerItems: [
      { icon: 'mdi-facebook', href: 'https://www.facebook.com/agrolog3' },
      { icon: 'mdi-twitter', href: 'https://twitter.com/agrolog3' },
      {
        icon: 'mdi-linkedin',
        href: 'https://www.linkedin.com/in/agrolog-farm-819549207',
      },
      { icon: 'mdi-instagram', href: 'https://www.instagram.com/agrolog300/' },
    ],
  }),
  methods: {
    goServices() {
      this.$router.push('/service')
    },
  },
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
  height: calc(100vh - 52px);
}

.custom__bg-1 {
  background: linear-gradient(rgba(0, 148, 50, 0.9), rgba(0, 148, 146, 0.7)),
    url('../assets/ginger.jpeg');
  -webkit-background: linear-gradient(
      rgba(0, 148, 50, 0.9),
      rgba(0, 148, 146, 0.7)
    ),
    url('../assets/ginger.jpeg');
  background-size: cover;
  background-attachment: fixed;
  height: 80%;
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

.slide-fade-enter-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-fade-leave-active {
  transition: all 0.2s ease-out;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(1000px);
  opacity: 0;
}
</style>
