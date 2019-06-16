<template>
    <div>
        <v-card class="primary lighten-1" dark v-for="reply in replys" :key="reply.id">
            <v-layout row wrap>
                <v-flex sm2>
                    <img class="right mt-3" :src="`./projects/${getImage()}.jpg`" height="50px" width="50px">
                </v-flex>
                <v-flex sm8>
                    <v-card-text>
                        <div class="subheading black--text">
                            {{reply.author}}
                            <span class="caption grey--text">{{reply.date}}</span>
                        </div>
                        <div class="body-1">{{reply.reply}}</div>
                    </v-card-text>
                </v-flex>
                <v-divider></v-divider>
            </v-layout>
        </v-card>
        <div v-for="(comment , i) in comments" :key="i">
            <v-card class="mx-auto" v-if="comment.reply" dark>
                <v-form ref="form" v-model="form" class="pa-3 pt-4">
                    <v-textarea v-model="reply" auto-grow box color="deep-purple" label="Reply ...!" rows="1"></v-textarea>
                </v-form>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn class="white--text" color="deep-warning accent-4" depressed @click="comment.reply=false">Cancel</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn :disabled="!form" :loading="isLoading" class="white--text" color="deep-purple accent-4" depressed @click="submitReply">reply</v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>
<script>
export default {
    props: ["comments"],
    data() {
        return {
            replys: [{
                id: 1,
                reply: "loremreply lorem",
                author: "Mostafa",
                date: "1st feb 19"
            }],
            isLoading: false,
            comment: "",
            form: false,
            reply: ""
        };
    },
    computed: {},
    methods: {
        getImage() {
            const max = 10;
            return Math.floor(Math.random() * (max + 1));
        },
        submitReply() {
            var i = 1;
            this.replys.unshift({
                reply: this.reply,
                author: "Mostafa" + i++
            });
        }
    }
};
</script>