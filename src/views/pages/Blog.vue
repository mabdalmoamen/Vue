<template>
	<div class="team">
        <h1 class="subheading lighten--text">{{pageTitle}}</h1>
        <v-container class="my-5">
		<v-card flat>
			<v-layout row wrap>
				<v-flex md12>
					<v-img
						:src="`./projects/${getImage()}.jpg`"
						height="250px"
						width="100%"
					></v-img>
				</v-flex>
				<v-flex xs6 md6>
					<v-avatar size="150" class="left blog-img ml-5 mr-3">
						<img :src="`./projects/${getImage()}.jpg`"
					/></v-avatar>
					<div class="display-1 font-weight-bold black--text mt-3">Mostafa</div>
					<div class="subheading grey--text">Front-End</div>
				</v-flex>
				<v-flex xs4 sm4 md4>
					<v-card-actions class="mt-3">
						<v-btn v-for="icon in icons" :key="icon.share" flat icon>
							<v-icon small :color="`${icon.color} lighten-1`">{{
								icon.share
							}}</v-icon>
						</v-btn>
					</v-card-actions>
				</v-flex>
				<v-flex xs3 sm4 md2>
					<v-card-actions class="mt-3 primary--text">
						<span class="mr-1">100</span>
						<v-icon small color="primary">fa fa-share</v-icon>
					</v-card-actions>
				</v-flex>
				<v-flex xs12>
					<v-card-text class="ml-5">
						<div class="display-2 font-weight-bold primary--text mt-3">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
							minima
						</div>
						<div class="my-3 subheading grey--text">Since 4 hours</div>
						<div>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
								maiores modi quidem veniam, expedita quis laboriosam, ullam
								facere adipisci, iusto, voluptate sapiente corrupti asperiores
								rem nemo numquam fuga ab at.
							</p>
						</div>
					</v-card-text>
				</v-flex>
			</v-layout>
		</v-card>
		<v-divider></v-divider>
		<Comments />
		<v-divider></v-divider>
		<v-card>
			<v-layout row wrap>
				<v-flex md4 v-for="post in posts" :key="post.id" class="mb-2">
					<v-card>
						<v-img>
							<v-img
								:src="`./projects/${getImage()}.jpg`"
								height="100px"
								width="100%"
							></v-img>
						</v-img>
						<v-avatar size="40" class="left blog-img ml-1 mr-2">
							<img :src="`./projects/${getImage()}.jpg`"
						/></v-avatar>
						<div class="body-1 font-weight-bold grey--text mt-1">
							{{ post.author }}
						</div>
						<div class="body-1 font-weight-bold grey--text">
							{{ post.country }}
						</div>
						<v-card-text>
							<v-list-tile route to="#" class="ml-0">
								<v-list-tile-content
									class="subheading font-weight-bold primary--text mt-3"
								>
									<v-list-tile-title>{{ post.title }}</v-list-tile-title>
								</v-list-tile-content>
							</v-list-tile>
							<p>{{ post.content }}</p>
						</v-card-text>
						<v-card-actions class="mt-1 primary--text">
							<div class="subheading grey--text mx-4 ">{{ post.time }}</div>
							<spacer></spacer>
							<div class="right ml-5" right icon flat>
								<span class="mr-2">100</span>
								<v-icon small color="primary">fa fa-share</v-icon>
							</div>
						</v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>
		</v-card>
        </v-container>
	</div>
</template>
<script>
import Comments from "./../comments/Comments";
export default {
	components: {
		Comments
	},
	data() {
		return {
			icons: [
				{
					share: "fab fa-facebook",
					color: "cyan darken-1"
				},
				{
					share: "fab fa-twitter",
					color: "cyan darken-1"
				},
				{
					share: "fab fa-linkedin",
					color: "cyan darken-1"
				}
			],
			posts: [
				{
					id: 1,
					title: "The title of the post simple and disc",
					content: "lorem",
					author: "Mostafa",
					time: "1st feb 19",
					country: "egypt"
				},
				{
					id: 2,
					title: "The title of the post simple and disc",
					content: "lorem",
					author: "Mostafa",
					time: "1st feb 19",
					country: "egypt"
				},
				{
					id: 3,
					title: "The title of the post simple and disc",
					content: "lorem",
					author: "Mostafa",
					time: "1st feb 19",
					country: "egypt"
				},
				{
					id: 4,
					title: "The title of the post simple and disc",
					content: "lorem",
					author: "Mostafa",
					time: "1st feb 19",
					country: "egypt"
				}
			]
		};
	},
	methods: {
		getImage() {
			const max = 10;
			return Math.floor(Math.random() * (max + 1));
		}
	}
};
</script>
<style>
.blog-img {
	/* position: relative; */
	bottom: 50%;
}

.display-2 {
	border-left: 8px solid #9652ff;
}
</style>