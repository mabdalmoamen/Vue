<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Our team Projects</h1>
    <v-container class="my-5">
      <v-expansion-panel>
        <v-expansion-panel-content v-for="project in projects " :key="project.id">
          <template v-slot:header color="project.status" theme--dark inset>
            <div class="subheading">{{project.title}}</div>
            <div class="align-end right">
              <v-chip small :class="`caption white--text my-2 ${project.status}`">{{project.status}}</v-chip>
            </div>
          </template>
          <v-card flat tile class="d-flex">
            <v-img
                :src="project.img"
              aspect-ratio="5"
              class="grey lighten-2"
            ></v-img>
          </v-card>
          <v-card :class=" `${project.status}`" dark>
            <v-card-text>
              <div class="subheading">{{project.author}}</div>
              <div class="grey--text tiny--text">Front-End</div>
            </v-card-text>
            <v-card-actions left class="justify-center">
              <v-card-text class="white--text">{{project.disc}}</v-card-text>
              <v-spacer></v-spacer>

              <v-btn color="success"   >
                <v-icon large left>message</v-icon>
                <Span>Get theme</Span>
              </v-btn>
            </v-card-actions>
            <v-card-actions class="justify-end">
              <v-btn
                v-for="(social, i) in socials"
                :key="i"
                :color="social.color"
                class="white--text"
                fab
                icon
                small
              >
                <v-icon>{{ social.icon }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-expansion-panel-content>
        <addProject/>
      </v-expansion-panel>
    </v-container>
  </div>
</template>

<script>
import addProject from "./AddProject";
export default {
  props:["projects"],
  components: { addProject },
  data() {
    return {
      i: 100,
      socials: [
        {
          icon: "fab fa-facebook",
          color: "indigo"
        },
        {
          icon: "fab fa-linkedin",
          color: "cyan darken-1"
        },
        {
          icon: "fab fa-instagram",
          color: "red lighten-3"
        }
      ],
     
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? 1 : -1));
    }
  }
};
</script>
