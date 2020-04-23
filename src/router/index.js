import Vue from "vue";
import VueRouter from "vue-router";
import Portal from "@/components/shared/Portal";
import Catalogue from "@/views/Catalogue.vue";
import ProductDetails from "@/views/ProductDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Portal",
    component: Portal,
    children: [
      {
        path: "",
        name: "Catalogue",
        component: Catalogue
      },
      {
        path: "product/:id",
        component: ProductDetails
      }
    ]
  },
  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
