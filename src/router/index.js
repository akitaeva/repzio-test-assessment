import Vue from "vue";
import VueRouter from "vue-router";
import Portal from "@/views/Portal";
import ThumbnailsContainer from "@/components/ThumbnailsContainer.vue";
import ProductDetails from "@/components/ProductDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Portal",
    component: Portal,
    children: [
      {
        path: "catalogue",
        component: ThumbnailsContainer
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
