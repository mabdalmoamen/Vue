<template>
  <div class="dashboard">
    <h1 class="subheading grey--text uppercase">{{pageTitle}}</h1>
    <v-container class="my-5">
      <v-card flat class="success" dark>
        <v-card-title>{{pageTitle + '--'}} <Span color="warning">Sit Title</Span></v-card-title>
        <v-card-actions class="justify-center">
          <strong>{{discMsg}}</strong>
        </v-card-actions>
      </v-card>
      <v-layout row justify-center wrap class="my-4">
        <v-flex
          color="lighten-3 "
          d-flex
          xs6
          sm6
          md4
          lg3
          v-for="service in services"
          :key="service.tiltle" 
          class="mb-2 ml-2"
        >
          <v-card color="purple">
            <v-card-actions class="justify-center">
              <v-icon size="50px" :color="service.color">{{ service.icon }}</v-icon>
            </v-card-actions>
            <v-card-title primary class="justify-center">{{ service.title }}</v-card-title>
            <v-card-text>{{ service.disc }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-card flat class="success" dark>
        <v-card-title class="justify-center">
          <strong>{{bookMsg}}</strong>
        </v-card-title>
        <v-card-actions class="justify-center">
          <v-btn class="teal" flat dark>Hire Us</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      pageTitle: "About",
      discMsg: "it's not normal Agency it's Give you a life",
      bookMsg: "Hire Us and Get HIGHER SALES , We Give your Project life ..! ",

      services: [
        {
          title: "Graphic Design",
          disc: "Nice design, high Quality and ou can print too !!!",
          icon: "fas fa-users",
          color: "indigo"
        },
        {
          title: "Web Application & Websites",
          disc: "Create Your Web site in a nice vie, Amazing and responsive ",
          icon: "fab fa-sellsy",
          color: "cyan darken-1"
        },
        {
          title: "Mobile Application",
          disc:
            "We have a profissional team to create your app in a nice view, and our price in your hand",
          icon: "fas fa-chart-line",
          color: "yellow darken-4"
        },
        {
          title: "Desktop Applications ",
          disc:
            "We have A desktop programe manage your project and make control at your items",
          icon: "fas fa-bus",
          color: "red lighten-2"
        }
      ]
    };
  },
  methods: {}
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

