<template>
    <div>
        <v-card class="transperant">
            <v-layout row wrap v-for="comment in comments" :key="comment.id">
                <v-flex sm2>
                    <v-img class="right mt-3" size="50" :src="`./projects/${getImage()}.jpg`" max-height="150px" width="100px"></v-img>
                </v-flex>
                <v-flex sm8>
                    <v-card-text>
                        <div class="subheading black--text">
                            {{comment.author}}
                            <span class="caption grey--text">{{comment.date}}</span>
                        </div>
                        <div class="body-1">{{comment.comment}}</div>
                        <v-btn flat icon justify-end @click="comment.reply=true">
                            <v-icon small>fas fa-reply</v-icon>
                        </v-btn>
                        <v-divider></v-divider>
                        <v-card flat v-for="reply in replys" :key="reply.id">
                            <v-layout row wrap>
                                <v-flex sm2>
                                    <v-img class="right mt-3" size="50" :src="`./projects/${getImage()}.jpg`" max-height="100px" width="60px"></v-img>
                                </v-flex>
                                <v-flex sm8>
                                    <v-card-text>
                                        <div class="subheading black--text">
                                            {{reply.author}}
                                            <span class="caption grey--text">{{reply.date}}</span>
                                        </div>
                                        <div class="body-1">{{reply.reply}}</div>
                                    </v-card-text>
                                    <v-divider></v-divider>
                                </v-flex>
                                <v-divider></v-divider>
                            </v-layout>
                        </v-card>
                    </v-card-text>
                    <v-card class="mx-auto" v-if="comment.reply">
                        <v-form ref="form" v-model="form" class="pa-3 pt-4">
                            <v-textarea v-model="reply" auto-grow box color="deep-purple" label="Your Reply" rows="1"></v-textarea>
                        </v-form>
                        <v-divider></v-divider>            <v-card-actions>
                            <v-btn class="white--text" color="deep-purple accent-4" depressed @click="comment.reply=false">Cancel</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn :disabled="!form" :loading="isLoading" class="white--text" color="deep-purple accent-4" depressed @click="submitReply">reply</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                <v-divider></v-divider>
            </v-layout>
            <AddComment :comments="comments" />
        </v-card>
    </div>
</template>
<script>
import AddComment from "./AddComment"

export default {
    components: {
        AddComment
    },
    data() {
        return {
            comments: [{
                id: 1,
                comment: "lorem comment lorem",
                author: "Mostafa",
                date: "1st feb 19",
                reply: false
            }],
            replys: [{
                id: 1,
                reply: "loremreply lorem",
                author: "Mostafa",
                date: "1st feb 19"
            }],

            reply: "",
            rules: {
                length: len => v =>
                    (v || "").length >= len ||
                    `Invalid character length, required ${len}`,
                required: v => !!v || "This field is required"
            }
        };
    },

    methods: {
        getImage() {
            const max = 10;
            return Math.floor(Math.random() * (max + 1));

        },
        submitReply() {
            if (this.reply) {
                this.replys.unshift({
                    reply: this.reply,
                    author: "Mostafa"
                });
            }
        }
    }
};
</script>