<template>
  <div class="dashboard">
    <h1 class="subheading grey--text uppercase">{{pageTitle}}</h1>
    <v-container class="my-5">
          <About/>

      <v-layout row class="mb-3">
        <v-icon left small>sort</v-icon>

        <v-tooltip left>
          <v-btn flat color="grey" @click="sortBy('title')" slot="activator">
            <v-icon left small>folder</v-icon>
            <span class="caption text-lowercase">By project name</span>
          </v-btn>
          <span>Click to sort By title</span>
        </v-tooltip>
        <v-tooltip right>
          <v-btn flat color="grey" @click="sortBy('author')" slot="activator">
            <v-icon left small>person</v-icon>
            <span class="caption text-lowercase">By Author name</span>
          </v-btn>
          <span>Click to sort By name</span>
        </v-tooltip>
      </v-layout>
      <v-card flat v-for="project in projects" :key="project.id">
        <v-layout row wrap :class="`pa-4 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="subheading grey--text">Project title</div>
            <div class="caption grey--text">Description</div>
            <div class>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Author</div>
            <div class>{{project.author}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Created At</div>
            <div class>{{project.at}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip small :class="`caption white--text my-2 ${project.status}`">{{project.status}}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
    <Team/>
  </div>
</template>

<script>
import About from "./About";
import Team from "./Team";
export default {
  props:["projects","team"],
  components: { Team, About },
  data() {
    return {
      
      pageTitle: "DashBoard"
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? 1 : -1));
    }
  }
};
</script>
<style scoped>
.project.completed {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.refused {
  border-left: 4px solid tomato;
}
.project.active {
  border-left: 4px solid #068fff;
}
.v-chip.completed {
  background: #3cd1c2;
}
.v-chip.ongoing {
  background: orange;
}
.v-chip.refused {
  background: tomato;
}
.v-chip.active {
  background: #068fff;
}
</style>

