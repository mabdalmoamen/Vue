<template>
	<v-app>
		<v-img src="./../bg.png" @click="drawer = !drawer">
			<Navbar :title="title" />
			<v-content class="mx-4 my-4">
				<v-container fluid>
					<router-view :team="team" :projects="projects" />
				</v-container>
			</v-content>
			<Footer />
		</v-img>
	</v-app>
</template>
<script>
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
export default {
	name: "App",
	components: {
		Navbar,
		Footer
	},
	data() {
		return {
			title: "Site Title",
			drawer: "sssss",
			team: [
				{
					id: 1,
					slug: "m.abdalmoamen",
					name: "Mostafa",
					role: "Front-End",
					img: "./../team/mostafa.png",
					email: "email@email.com",
					url: "#",
					adress: "MNF, Egypt",
					phone: "0100000",
					birthday: "1st feb 93"
				},
				{
					id: 2,
					slug: "ahmed1",
					name: "Ahmed",
					role: "Back-End",
					img: "./../team/ahmed.png",
					email: "email@email.com",
					url: "#",
					adress: "MNF, Egypt",
					phone: "0100000",
					birthday: "1st feb 93"
				},
				{
					id: 3,
					slug: "Mona2",
					name: "Mona",
					role: "Graphic Designer",
					img: "./../team/mona.jpg",
					email: "email@email.com",
					url: "#",
					adress: "MNF, Egypt",
					phone: "0100000",
					birthday: "1st feb 93"
				},
				{
					id: 4,
					slug: "hala3",
					name: "Hala",
					role: "Ceo",
					img: "./../team/hala.jpg",
					email: "email@email.com",
					url: "#",
					adress: "MNF, Egypt",
					phone: "0100000",
					birthday: "1st feb 93"
				}
			],
             projects: [{
                id: 1,
                user: "mona2",
          title: "Blog Site",
          author: "Mostafa",
          at: "1s jun 19",
          status: "ongoing",
          disc:
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            img: "./../projects/1.jpg",
                type:"Graphic Design",
                likeicon: "fa fa-thumbs-up",
                likecolor: "cyan darken-1",
                like: 10,
                dlikeicon: "fa fa-thumbs-down",
                dlikecolor: "red lighten-3",
                dlike: 0
            },
            {
                id:2,
                user: "m.abdalmoamen",
          title: "Blog Site",
          author: "Mostafa",
          at: "1s jun 19",
          status: "completed",
          disc:
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            img: "./../projects/2.jpg",
                type:"Web Application",
                likeicon: "fa fa-thumbs-up",
                likecolor: "cyan darken-1",
                like: 10,
                dlikeicon: "fa fa-thumbs-down",
                dlikecolor: "red lighten-3",
                dlike: 0
            },
            {
                id: 1,
                user: "hala3",
          title: "Blog Site",
          at: "1s jun 19",
          status: "refused",
          disc:
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            img: "./../projects/3.jpg",
                type:"WebSite",
                likeicon: "fa fa-thumbs-up",
                likecolor: "cyan darken-1",
                like: 10,
                dlikeicon: "fa fa-thumbs-down",
                dlikecolor: "red lighten-3",
                dlike: 0
            },
            {
                id: 3,
                user: "ahmed1",
          title: "Blog Site",
          author: "Mostafa",
          at: "1s jun 19",
          status: "refused",
          disc:
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            img: "./../projects/4.jpg",
                type:"Mobile Application",
                likeicon: "fa fa-thumbs-up",
                likecolor: "cyan darken-1",
                like: 10,
                dlikeicon: "fa fa-thumbs-down",
                dlikecolor: "red lighten-3",
                dlike: 0,
                show:"all"
            },
            {
                id: 4,
                user: "m.abdalmoamen",
          title: "Blog Site",
          author: "Mostafa",
          at: "1s jun 19",
          status: "active",
          disc:
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
            img: "./../projects/5.jpg",
                type:"Graphic Design",
                likeicon: "fa fa-thumbs-up",
                likecolor: "cyan darken-1",
                like: 10,
                dlikeicon: "fa fa-thumbs-down",
                dlikecolor: "red lighten-3",
                dlike: 0,
            }
        ],

		};
	} 
};
</script>
<style scoped>
.v-expansion-panel__container {
  background: #3cd1c2;
}
.completed {
  background: #3cd1c2;
}
.ongoing {
  background: orange;
}
.refused {
  background: tomato;
}
.active {
  background: #068fff;
}
</style>

