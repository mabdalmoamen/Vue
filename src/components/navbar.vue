<template>
    <div>
        <v-toolbar app class="primary darken-1" flat dark>
            <v-toolbar-side-icon @click.stop="drawer =! drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="lighten">
                <v-list-tile route to="/">
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{title}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn v-if="!logedin" class="transparent" flat>
                <span v-if="!logedin" left>
                    <SignUp />
                </span>
                <v-icon small class="ml-2">fas fa-user-plus</v-icon>
            </v-btn>
            <v-btn v-if="!logedin" class="transparent" flat>
                <span v-if="!logedin" right>
                    <Login :logedin="logedin" @updated="updateLogedin" @changeName="updateName($event)" />
                </span>
                <v-icon small class="ml-2">fas fa-sign-in-alt</v-icon>
            </v-btn>
            <v-list-tile avatar v-if="logedin" route :to="`profile/${name}`">
                <v-list-tile-avatar>
                    <img src=" pr.png" left>
                </v-list-tile-avatar>
                <v-list-tile-content>
                    <v-list-tile-title>
                        <p class="white--text subgeading mt-1">{{name?name:'Mostafa'}}</p>
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-btn v-if="logedin" @click="logedin=false" flat class="mx-4 transparent">
                <span>LogOut</span>
                <v-icon small class="ml-2">exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" app :mini-variant.sync="mini" @click="min =! mini" hide-overlay stateless class="primary darken-1" dark>
            <v-toolbar flat class="primary darken-1" v-if="logedin">
                <v-list class="pa-0">
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <img src="pr.png" right>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                <p class="white--text subgeading mt-1">{{name?name:'Mostafa'}}</p>
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-list :class="` ${logedin?'pt-0':'pt-5'}`" dense>
                <v-divider></v-divider>
                <v-list-tile v-for="item in items" :key="item.title" route :to="item.link">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>
<script>
import SignUp from "./SignUp";
import Login from "./Login";
export default {
    name: "Navbar",
    props: ["title"],
    components: {
        SignUp,
        Login
    },
    data() {
        return {
            drawer: false,
            items: [{
                    title: "Dashboard",
                    icon: "dashboard",
                    link: "/"
                },
                {
                    title: "Projects",
                    icon: "explore",
                    link: "/projects"
                },
                {
                    title: "Team",
                    icon: "group_work ",
                    link: "/team"
                },
                {
                    title: "About",
                    icon: "question_answer",
                    link: "/about"
                },
                {
                    title: "Profile",
                    icon: "person",
                    link: "/profile"
                },
                {
                    title: "Contact",
                    icon: "email",
                    link: "/contact"
                },
                {
                    title: "Blog",
                    icon: "fab fa-blogger-b",
                    link: "/blog"
                }
            ],
            mini: false,
            right: null,
            logedin: false,
            name: ''

        };
    },
    methods: {
        updateLogedin() {
            return this.logedin = true
        },
        updateName(name) {
            return this.name = name
        }
    },
};
</script>
<style>
</style>