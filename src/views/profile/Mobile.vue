<template>
<v-dialog max-width="600px">
    <v-btn slot="activator" flat color="blue" icon>
        <v-icon>edit</v-icon>
    </v-btn>
    <v-card>
        <v-card-title class="justify-center success">
            <h2 class="subheading" color="success">Edit Your Mobile Numbr</h2>
        </v-card-title>
        <v-card-text>
            <v-form class="px-3">
                <v-text-field label="Your Mobile Number" v-model="mobile"></v-text-field>
                <v-card-actions>
                    <v-btn class="success" prepend-icon="save">Save</v-btn>
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
            mobile: "",
        };
    }
};
</script>
