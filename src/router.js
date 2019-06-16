import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import About from "./views/About.vue";
import Profile from "./views/profile/Profile.vue";
import Projects from "./views/Projects.vue";
import Team from "./views/Team.vue";
import Contact from "./views/Contact.vue";
import Blog from "./views/pages/Blog.vue";
import Comments from "./views/comments/Comments.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "dashboard",
            component: Dashboard
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/profile/:slug",
            name: "profile",
            component: Profile
        },
        {
            path: "/profile/:slug",
            name: "profile",
            component: Profile
        },
        {
            path: "/projects",
            name: "projects",
            component: Projects
        },
        {
            path: "/team",
            name: "team",
            component: Team
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact
        },
        {
            path: "/blog",
            name: "blog",
            component: Blog
        },

        {
            path: "/comments",
            name: "comments",
            component: Comments
        }
    ]
});