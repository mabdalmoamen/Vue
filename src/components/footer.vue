<template>
  <v-footer>
    <v-card class="flex" tile dark>
      <v-card-title class="primary darken-1" flat>
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon.icon" class="mx-1" icon>
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey justify-center">
        &copy;2019 —
        <strong>Site title</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: [
      { icon: "fab fa-facebook", url: "#" },
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-google-plus", url: "#" },
      { icon: "fab fa-linkedin", url: "#" },
      { icon: "fab fa-instagram", url: "#" }
    ]
  })
};
</script>
