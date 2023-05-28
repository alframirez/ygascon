import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/HomePage.vue";
import BlogList from "./views/blog/BlogList.vue";
import BooksList from "./views/books/BooksList.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blog",
    name: "BlogList",
    component: BlogList,
  },
  {
    path: "/books",
    name: "BooksList",
    component: BooksList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
