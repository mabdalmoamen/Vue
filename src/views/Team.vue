<template>
    <div class="team">
        <h1 class="subheading lighten--text">{{pageTitle}}</h1>
        <v-container class="my-5">
            <v-card class="text-md-center ma-3 primary" flat>
                <v-card-title>
                    <div class="justify-center">The Power OF OUR team is work group </div>
                </v-card-title>
            </v-card>
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.id">
                    <v-card class="text-xs-center ma-3" flat>
                        <v-responsive class="pt-4">
                            <v-avatar size="100" class="grey lighten-2" left>
                                <img :src="person.img" />
                            </v-avatar>
                        </v-responsive>
                        <v-card-text>
                            <div class="subheading" @>{{person.name}}</div>
                            <div class="grey--text">{{person.role}}</div>
                        </v-card-text>
                        <v-card-actions left>
                            <v-btn color="grey" flat @click="goprof(person.slug)">
                                <v-icon small left>message</v-icon>
                                <Span>Message</Span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
export default {
    props: ["team"],
    data() {
        return {

            pageTitle: 'Team',
        };
    },
    methods: {
        goprof(slug) {
            this.$router.push({ name: "profile", params: { slug: slug } })
        }
    }
};
</script>