<template>
<v-dialog max-width="600px">
    <v-btn slot="activator" flat color="blue" icon>
        <v-icon>edit</v-icon>
    </v-btn>
    <v-card>
        <v-card-title class="justify-center success">
            <h2 class="subheading" color="success">Edit Your Email</h2>
        </v-card-title>
        <v-card-text>
            <v-form class="px-3">
                <v-text-field label="Email" v-model="email" v-validate="'required|email'" :error-messages="errors.collect('email')" data-vv-name="email" required></v-text-field>
                <v-card-actions>
                    <v-btn class="success" prepend-icon="save"  @click="submit">Save</v-btn>
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
            email: "",
            dictionary: {
                attributes: {
                    email: 'E-mail Address'
                    // custom attributes
                },
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
