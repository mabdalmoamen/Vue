<template>
  <v-dialog max-width="400px"       v-model="dialog"

>                        
    <div slot="activator" >
      <Span>Login</Span></div>
    <v-card>
      <v-card-title class="justify-center success">
        <h2 class="subheading" color="success">Fill fields and Jouin</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
        
         
        <v-container>
      <v-layout row wrap>

       

        <v-flex xs12 >
          <v-text-field
            v-model="name"
            label="Name"
            box
          ></v-text-field>
        </v-flex>
         <v-flex xs12 >
          <v-text-field
            v-model="password"
            :append-icon="show ? 'visibility' : 'visibility_off'"
            :rules="[rules.required, rules.min]"
            :type="show ? 'text' : 'password'"
            name="input-10-1"
            label="Your Password"
            hint="At least 8 characters"
            counter
            @click:append="show = !show"
          ></v-text-field>
        </v-flex>
        <v-flex xs12>
           <v-card-actions>
            <v-btn class="success" @click.stop="drawer =false" prepend-icon="" @click="update(logedin),submit()">Login</v-btn>
            <v-spacer></v-spacer>
                        <v-btn class="warning" prepend-icon="" @click="dialog = false">Cancel </v-btn>

          </v-card-actions>
        </v-flex>


      </v-layout>
    </v-container>
            </v-form>

      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import Vue from "vue";

import router from "vue-router";
Vue.use(router);

export default {

props:["logedin"],
  data() {
    return {
    dialog: false,
    show:"false",
      email: "",
      name:'',
       password: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match')
        },
    };
  },
    methods: {
      submit(){
        this.$emit("changeName",this.name);

      },
      update(logedin){
        this.name?this.$emit('updated',{logedin}):'';
              this.$router.push({ path: '/profile' })

      }
    },
   
      
}
</script>