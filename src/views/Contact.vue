<template>
  <div class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card outlined tile class="custom__card">
            <h2 class="text-center text-h2 mt-12 white--text font-weight-thin">
              Contact
              <span class="warning--text font-weight-light">US</span>
            </h2>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card outlined tile>
            <h2
              class="text-h6 font-weight-light pa-2 grey--text text--darken-3 text-center custom__heading-green"
            >
              Get in touch with us via the form below
            </h2>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-img src="../assets/contact_us.svg"></v-img>
                </v-col>
                <v-col>
                  <v-form @submit.prevent ref="form">
                    <v-row>
                      <v-col cols="10">
                        <v-text-field
                          hide-details="auto"
                          v-model="name"
                          solo
                          class="mt-4"
                          label="Name"
                          prepend-icon="mdi-account"
                          type="text"
                          color="success"
                          :rules="[rules.required, rules.counter]"
                        />
                      </v-col>
                      <v-col cols="10">
                        <v-text-field
                          hide-details="auto"
                          v-model="email"
                          solo
                          class="mt-4"
                          label="Email"
                          name="Email"
                          prepend-icon="mdi-card-account-mail"
                          type="text"
                          color="success"
                          :rules="[rules.required, rules.email]"
                        />
                      </v-col>
                      <v-col cols="10">
                        <v-textarea
                          auto-grow
                          clearable
                          solo
                          color="success"
                          label="Message"
                          prepend-icon="mdi-email"
                          v-model="message"
                          :rules="[rules.required, rules.counter]"
                        ></v-textarea>
                      </v-col>
                    </v-row>
                  </v-form>
                  <div class="text-center mt-3">
                    <v-btn
                      @click="submitForm()"
                      :loading="loading"
                      :disabled="disabled"
                      rounded
                      class="text-capitalize px-8 white--text"
                      color="warning"
                      >Submit</v-btn
                    >
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
            <h2
              class="text-h6 font-weight-light pa-2 grey--text text--darken-3 text-center custom__heading-orange"
            >
              Prefer the traditional methods? We got you covered
            </h2>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-card>
                    <v-card-title>
                      <v-icon color="success">mdi-email</v-icon>
                      <span class="ml-2 text-h6 font-weight-light"
                        >info@agrolog.farm, contact@agrolog.farm
                      </span>
                    </v-card-title>
                  </v-card>
                </v-col>
                <v-col cols="6">
                  <v-card>
                    <v-card-title>
                      <v-icon color="success">mdi-phone</v-icon>
                      <span class="ml-2 text-h6 font-weight-light"
                        >+234 (0) 809 3609 111, +234 (0) 812 1536 000
                      </span>
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
    name: '',
    email: '',
    message: '',
    loading: false,
    disabled: false,
    rules: {
      required: (v) => !!v || 'Field is required',
      counter: (v) => (v && v.length >= 3) || 'Minimum length is 3 characters',
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
      },
    },
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
</style>
