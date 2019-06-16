<template>
<v-dialog max-width="600px">
    <v-btn slot="activator" flat color="blue" icon>
        <v-icon>edit</v-icon>
    </v-btn>
    <v-card>
        <v-card-title class="justify-center success">
            <h2 class="subheading" color="success">Edit Your Full Name</h2>
        </v-card-title>
        <v-card-text>
            <v-form class="px-3">
                <v-text-field label="First name" v-model="first" 
                v-validate="'required|min:3|max:10'"  
                :error-messages="errors.collect('first')" 
                data-vv-name="name" required>
                </v-text-field>
                <v-text-field label="Last Name" v-model="last"
                 v-validate="'required|min:3|max:10'"  
                 :error-messages="errors.collect('last')"
                  data-vv-name="name" required>
                  </v-text-field>
                <v-card-actions>
                    <v-btn class="success" prepend-icon="save" 
                    @click="submit">Save</v-btn>
                </v-card-actions>
            </v-form>
        </v-card-text>
    </v-card>
</v-dialog>
</template>

<script>
import Vue from 'vue'

import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

export default {
    $_veeValidate: {
        validator: 'new'
    },
    data() {
        return {
            first: "",
            last: "",
      dictionary: {

            custom: {
                first: {
                    required: () => 'First Name can not be empty',
                    max: 'The Fisrt name can\'t be more than 10 characters',
                    min:'The Fisrt name can\'t be less than 3 characters '
                    // custom messages
                },
                last: {
                    required: () => 'Last Name can not be empty',
                   max: 'The Fisrt name can\'t be more than 10 characters',
                    min:'The Last name can\'t be less than 3 characters '
                },
            }
      }

        }
    },
    mounted() {
        this.$validator.localize('en', this.dictionary)
    },

    methods: {
        submit() {
            this.$validator.validateAll()
        },
    }
}
</script>
