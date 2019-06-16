<template>
    <div class="profile">
        <v-toolbar class="display-3 success" flat>
            <v-toolbar-title>
                <h1 class="subheading lighten--text">Profile {{username}} </h1>
            </v-toolbar-title>
        </v-toolbar>
        <v-container class="my-5">
            <v-layout row wrap>
                <v-flex xs3>
                    <v-list primary tile flat>
                        <v-list-tile v-for="item in items" :key="item.title" @click="showTab(item.tab)">
                            <v-list-tile-action class="caption font-weight-black grey--text">
                                <v-icon small>{{ item.icon }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content class="caption font-weight-black grey--text">
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile-content>
                            <v-divider class="primary"></v-divider>
                        </v-list-tile>
                    </v-list>
                </v-flex>
                <v-flex xs9 class="content" v-for="person in users" :key="person.id">
                    <v-card flat v-if="tab=='info'">
                        <v-toolbar class="display-3" color="transparent" flat>
                            <v-icon>fas fa-info</v-icon>
                            <v-toolbar-title>Personal info</v-toolbar-title>
                        </v-toolbar>
                        <v-divider></v-divider>
                        <v-layout row wrap class="pa-4 project">
                            <v-flex xs12>
                                <v-card-title class="justify-center">
                                    <v-avatar size="250" min-width="250px" min-height="250px" class="grey lighten-2" left>
                                        <v-img :src="`./${person.img}`" class="white">
                                            <v-card-actions class="align-center justify-center row fill-height">
                                                <v-btn flat color="blue" dark icon>
                                                    <v-icon class="pl-2 mb-1">edit</v-icon>
                                                </v-btn>
                                            </v-card-actions>
                                        </v-img>
                                    </v-avatar>
                                </v-card-title>
                            </v-flex>
                            <v-flex xs12 md3>
                                <v-card-title>
                                    <div class="body-1 font-weight-medium">Full Name :</div>
                                </v-card-title>
                            </v-flex>
                            <v-flex md7 xs12>
                                <v-card-title class>
                                    <div class="caption font-weight-black grey--text">{{person.name}}</div>
                                </v-card-title>
                            </v-flex>
                            <v-spacer></v-spacer>
                            <v-flex md2 xs12>
                                <v-card-actions class="justify-end">
                                    <FullName />
                                </v-card-actions>
                            </v-flex>
                            <v-flex xs12 md3>
                                <v-card-title>
                                    <div class="body-1 font-weight-medium">User name :</div>
                                </v-card-title>
                            </v-flex>
                            <v-flex md7 xs12>
                                <v-card-title class>
                                    <div class="caption font-weight-black grey--text">{{person.slug}}</div>
                                </v-card-title>
                            </v-flex>
                            <v-spacer></v-spacer>
                            <v-flex md2 xs12>
                                <v-card-actions class="justify-end">
                                    <UserName />
                                </v-card-actions>
                            </v-flex>
                            <v-flex xs12 md3>
                                <v-card-title>
                                    <div class="body-1 font-weight-medium">Email :</div>
                                </v-card-title>
                            </v-flex>
                            <v-flex md7 xs12>
                                <v-card-title class>
                                    <div class="caption font-weight-black grey--text">{{person.email}}</div>
                                </v-card-title>
                            </v-flex>
                            <v-spacer></v-spacer>
                            <v-flex md2 xs12>
                                <v-card-actions class="justify-end">
                                    <Email />
                                </v-card-actions>
                            </v-flex>
                            <v-flex xs12 md3>
                                <v-card-title>
                                    <div class="body-1 font-weight-medium">Your Website :</div>
                                </v-card-title>
                            </v-flex>
                            <v-flex md7 xs12>
                                <v-card-title class>
                                    <div class="caption font-weight-black grey--text">{{person.url}}</div>
                                </v-card-title>
                            </v-flex>
                            <v-spacer></v-spacer>
                            <v-flex md2 xs12>
                                <v-card-actions class="justify-end">
                                    <WebSite />
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-card>
                    <v-card flat v-if="tab=='settings'">
                        <v-toolbar class="display-3" color="transparent" flat>
                            <v-icon>fas fa-cogs</v-icon>
                            <v-toolbar-title>General settings</v-toolbar-title>
                        </v-toolbar>
                        <v-divider></v-divider>
                        <v-layout row wrap class="pa-4 project">
                            <v-flex xs12 md3>
                                <v-card-title>
                                    <div class="body-1 font-weight-medium">Your Address :</div>
                                </v-card-title>
                            </v-flex>
                            <v-flex md7 xs12>
                                <v-card-title class>
                                    <div class="caption font-weight-black grey--text">{{person.adress}}</div>
                                </v-card-title>
                            </v-flex>
                            <v-spacer></v-spacer>
                            <v-flex md2 xs12>
                                <v-card-actions class="justify-end">
                                    <Adress />
                                </v-card-actions>
                            </v-flex>
                            <v-flex xs12 md3>
                                <v-card-title>
                                    <div class="body-1 font-weight-medium">Your Mobile Number :</div>
                                </v-card-title>
                            </v-flex>
                            <v-flex md7 xs12>
                                <v-card-title class>
                                    <div class="caption font-weight-black grey--text">{{person.phone}}</div>
                                </v-card-title>
                            </v-flex>
                            <v-spacer></v-spacer>
                            <v-flex md2 xs12>
                                <v-card-actions class="justify-end">
                                    <Mobile />
                                </v-card-actions>
                            </v-flex>
                            <v-flex xs12 md3>
                                <v-card-title>
                                    <div class="body-1 font-weight-medium">Your BirthDay:</div>
                                </v-card-title>
                            </v-flex>
                            <v-flex md7 xs12>
                                <v-card-title class>
                                    <div class="caption font-weight-black grey--text">{{person.birthday}}</div>
                                </v-card-title>
                            </v-flex>
                            <v-spacer></v-spacer>
                            <v-flex md2 xs12>
                                <v-card-actions class="justify-end">
                                    <Birthday />
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-card>
                    <v-card flat v-if="tab=='security'">
                        <v-toolbar class="display-3" color="transparent" flat>
                            <v-icon>fas fa-user-secret</v-icon>
                            <v-toolbar-title>Security settings</v-toolbar-title>
                        </v-toolbar>
                        <v-divider></v-divider>
                        <form>
                            <v-layout row wrap class="pa-4 project">
                                <v-flex xs3>
                                    <v-card-title>
                                        <div class="subheading">Password :</div>
                                    </v-card-title>
                                </v-flex>
                                <v-flex xs7>
                                    <v-text-field class>
                                        <div class="caption font-weight-black grey--text">lorem lorem</div>
                                    </v-text-field>
                                </v-flex>
                                <v-spacer></v-spacer>
                                <v-flex xs2>
                                    <v-card-actions right>
                                        <v-btn flat dark class="info" icon>
                                            <v-icon>edit</v-icon>
                                        </v-btn>
                                    </v-card-actions>
                                </v-flex>
                            </v-layout>
                        </form>
                    </v-card>
                    <v-card flat tile v-if="tab=='timeline'">
                        <v-toolbar class="display-3" color="transparent" flat>
                            <v-icon>folder</v-icon>
                            <v-toolbar-title>Author themes</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-text-field v-if="search" class="mt-2" flat label="Search" prepend-inner-icon="search" solo-inverted></v-text-field>
                            <v-btn icon>
                                <v-icon @click="search=!search">search</v-icon>
                            </v-btn>
                        </v-toolbar>
                        <v-divider></v-divider>
                        <v-container v-for="type in types" :key="type" grid-list-md white>
                            <v-subheader class="warning" darken-2>
                                {{ type }}
                                <v-spacer></v-spacer>
                                <div class="warning" darken-2>{{ type }}</div>
                            </v-subheader>
                            <v-layout row wrap>
                                <v-spacer></v-spacer>
                                <v-flex v-for="project in userprojects" :key="project.id" xs12 sm6 :class="userprojects.length ==1?'md12':'md6'" dark>
                                    <v-card class=" p-card">
                                        <v-img :src="`${project.img}${getImage()}.jpg`" height="250px" class="white">
                                            <v-card class="card-project success pt-5" dark height="100%" darken-5>
                                                <v-card-text class="align-center">
                                                    <div class="title font-weight-light">{{project.title}}</div>
                                                </v-card-text>
                                                <v-card-title>
                                                    <div class="text-wrap">{{project.disc}}</div>
                                                </v-card-title>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn color="info" dark depressed>
                                                        <span>More</span>
                                                        <v-icon small class="pl-2 mb-1">fas fa-info</v-icon>
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-img>
                                        <v-card-actions class="whitepy-2 primary">
                                            <v-badge :color="project.likecolor" class="white--text ml-3" icon small>
                                                <template v-slot:badge>
                                                    <span>{{project.like}}</span>
                                                </template>
                                                <v-icon small :color="`${project.likecolor} lighten-1`" @click="project.like++">{{ project.likeicon }}</v-icon>
                                            </v-badge>
                                            <v-spacer></v-spacer>
                                            <v-badge :color="project.dlikecolor" class="white--text mr-3" icon small right>
                                                <template v-slot:badge>
                                                    <span>{{project.dlike}}</span>
                                                </template>
                                                <v-icon small :color="`${project.dlikecolor} lighten-1`" @click="project.dlike++">{{ project.dlikeicon }}</v-icon>
                                            </v-badge>
                                        </v-card-actions>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
import FullName from "./FullName"
import UserName from "./UserName"
import Email from "./Email"
import WebSite from "./WebSite"
import Mobile from "./Mobile"
import Adress from "./Adress"
import Birthday from "./Birthday"
// import Blog from "./../pages/Blog"

export default {
    props: ["team"],
    components: {
        FullName,
        UserName,
        Email,
        WebSite,
        Mobile,
        Adress,
        Birthday,
        // Blog
    },
    data: () => ({
        search: false,
        username: '',
        types: ["Graphic", "wep app", "Wep Site", "Mobile app"],
        projects: [{
                id: 1,
                user: "mona",
                title: "Project title",
                disc: "lorem lorem some disc word test bblah blah",
                img: "./../projects/",
                likeicon: "fa fa-thumbs-up",
                likecolor: "cyan darken-1",
                like: 10,
                dlikeicon: "fa fa-thumbs-down",
                dlikecolor: "red lighten-3",
                dlike: 0
            },
            {
                id: 2,
                user: "Mostafa",
                title: "Project title",
                disc: "lorem lorem some disc word test bblah blah",
                img: "./../projects/",
                likeicon: "fa fa-thumbs-up",
                likecolor: "cyan darken-1",
                like: 10,
                dlikeicon: "fa fa-thumbs-down",
                dlikecolor: "red lighten-3",
                dlike: 0
            },
            {
                id: 1,
                user: "Hala",
                title: "Project title",
                disc: "lorem lorem some disc word test bblah blah",
                img: "./../projects/",
                likeicon: "fa fa-thumbs-up",
                likecolor: "cyan darken-1",
                like: 10,
                dlikeicon: "fa fa-thumbs-down",
                dlikecolor: "red lighten-3",
                dlike: 0
            },
            {
                id: 3,
                user: "Ahmed",
                title: "Project title",
                disc: "lorem lorem some disc word test bblah blah",
                img: "./../projects/",
                likeicon: "fa fa-thumbs-up",
                likecolor: "cyan darken-1",
                like: 10,
                dlikeicon: "fa fa-thumbs-down",
                dlikecolor: "red lighten-3",
                dlike: 0
            },
            {
                id: 4,
                user: "Mostafa",
                title: "Project title",
                disc: "lorem lorem some disc word test bblah blah",
                img: "./../projects/",
                likeicon: "fa fa-thumbs-up",
                likecolor: "cyan darken-1",
                like: 10,
                dlikeicon: "fa fa-thumbs-down",
                dlikecolor: "red lighten-3",
                dlike: 0,
            }
        ],

        items: [{
                title: "Your information",
                icon: "fas fa-info",
                tab: "info"
            },
            {
                title: "General Setings",
                icon: "fas fa-cogs",
                tab: "settings"
            },
            {
                title: "Personal security",
                icon: "fas fa-user-secret",
                tab: "security"
            },

            {
                title: "Project And posts",
                icon: "folder",
                tab: "timeline"
            }
        ],
        tab: "info",
        like: 0
    }),
    created() {
        this.username = this.$route.params.user;
        this.team.filter(person => {
            person.name == this.username
        });

    },
    computed: {
        userprojects() {
            let alias = this.$route.params.user;

            return this.projects.filter(pro => {
                return pro.user == alias
            });
        },
        users() {
            let user = this.$route.params.user;
            return this.team.filter(person => {
                return person.name == user
            });
        }
    },

    methods: {
        getImage() {
            const max = 10;
            return Math.floor(Math.random() * (max + 1));
        },
        showTab(tab) {
            this.tab = tab;
        },
        likes() {
            if (this.project.like) {
                this.project.like++
            } else {
                this.projects.dlike++

            }
        }

    }
};
</script>
<style>
.content {
    border-left: 1px solid grey;
    border-bottom: 1px solid grey;
}

.card-project {
    opacity: 0;
}

.v-image:hover .card-project {
    opacity: 0.7;
}
</style>