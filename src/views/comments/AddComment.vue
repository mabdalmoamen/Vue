<template>
	<!-- <Comments Form /> -->
	<v-card class="mx-auto" width="700px" flat>
		<v-form ref="form" @submit="submitComment" v-model="form" class="pa-3 pt-4">
			<v-textarea
				v-model="comment"
				auto-grow
				box
				color="deep-purple"
				label="Yor Comment"
				rows="1"
			></v-textarea>
		</v-form>
		<v-divider></v-divider>
		<v-card-actions>
			<v-spacer></v-spacer>
			<v-btn
				:disabled="!form"
				:loading="isLoading"
				class="white--text"
				color="deep-purple accent-4"
				depressed
				@click="submitComment"
				>Submit</v-btn
			>
		</v-card-actions>
	</v-card>
	<!-- <End Comments Form /> -->
</template>
<script>
export default {
	props: ["comments"],
	data() {
		return {
			isLoading: false,

			comment: "",
			form: false,
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
		submitComment() {
			if (this.comment) {
				this.comments.push({
					comment: this.comment,
					author: "Mostafa",
					reply: false
				});
			}
		}
	}
};
</script>
