<template>
  <v-dialog max-width="600px">
    <v-btn slot="activator" class="success">Add Project</v-btn>
    <v-card>
      <v-card-title class="justify-center success">
        <h2 class="subheading" color="success">Add project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field label="Title" v-model="title" prepend-icon="folder"></v-text-field>
          <v-textarea label="Project Disc" v-model="projectDisc" prepend-icon="info"></v-textarea>
          <v-text-field label="Status" v-model="status" prepend-icon=""></v-text-field>
          <v-card-actions>
            <v-btn class="success" prepend-icon="">Add</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      projectDisc: "",
      status: ""
    };
  }
};
</script>