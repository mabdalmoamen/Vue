<template>
  <div class="about">
    <h1 class="subheading lighten--text">Contact US</h1>
    <v-container class="my-5">
       <v-card>
      <v-card-title class="justify-center success">
        <h2 class="subheading" color="success">Fill Form to contact Us</h2>
      </v-card-title>
      <v-card-text>
  <form>
   
    <v-text-field
      v-model="email"
      v-validate="'required|email'"
      :error-messages="errors.collect('email')"
      label="E-mail"
      data-vv-name="email"
      required
    ></v-text-field>
     <v-textarea
      v-model="msg"
      v-validate="'required|min:10'"
      :counter="10"
      :error-messages="errors.collect('name')"
      label="Your message"
      data-vv-name="name"
      required
    ></v-textarea>
    <v-select
      v-model="select"
      v-validate="'required'"
      :items="roles"
      :error-messages="errors.collect('select')"
      label="Select Service"
      data-vv-name="select"
      required
    ></v-select>
    <v-checkbox
      v-model="checkbox"
      v-validate="'required'"
      :error-messages="errors.collect('checkbox')"
      value="1"
      label="I'm Agree .. Send Message !! "
      data-vv-name="checkbox"
      type="checkbox"
      required
    ></v-checkbox>

    <v-btn @click="submit" class="success">submit</v-btn>
    <v-btn @click="clear" class="warning">clear</v-btn>
  </form>
</v-card-text>
    </v-card>    </v-container>
  </div>
</template>
<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'

  Vue.use(VeeValidate)

  export default {
    $_veeValidate: {
      validator: 'new'
    },

    data: () => ({
      msg: '',
      email: '',
      select: null,
      roles: [
        'Web Sites',
        'Graphics',
        'Mobile Apps',
        'Web Apps'
      ],
      checkbox: null,
      dictionary: {
        attributes: {
          email: 'E-mail Address'
          // custom attributes
        },
        custom: {
          name: {
            required: () => 'Name can not be empty',
            max: 'The name field may not be greater than 10 characters'
            // custom messages
          },
          select: {
            required: 'Select field is required'
          }
        }
      }
    }),

    mounted () {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      submit () {
        this.$validator.validateAll()
      },
      clear () {
        this.msg = ''
        this.email = ''
        this.select = null
        this.checkbox = null
        this.$validator.reset()
      }
    }
  }
</script>