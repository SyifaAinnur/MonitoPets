import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/views/Home.vue"),
      meta: {
        layout: "HomePage",
        title: "Home",
      },
    },
    {
      path: "/category/:category",
      component: () => import("@/views/ComingSoon.vue"),
      name: "category",
      meta: {
        layout: "DefaultPage",
      },
    },
    {
      path: "/category",
      component: () => import("@/views/ComingSoon.vue"),
      name: "all-category",
      meta: {
        layout: "DefaultPage",
        title: "Category",
      },
    },
    {
      path: "/product/:product",
      component: () => import("@/views/ComingSoon.vue"),
      name: "product",
      meta: {
        layout: "DefaultPage",
      },
    },
    {
      path: "/search",
      component: () => import("@/views/Search.vue"),
      name: "search",
      meta: {
        layout: "DefaultPage",
        title: "Search",
      },
    },
    {
      path: "/product",
      component: () => import("@/views/ComingSoon.vue"),
      name: "products",
      meta: {
        layout: "DefaultPage",
        title: "All Products",
      },
    },
    {
      path: "/partners",
      component: () => import("@/views/ComingSoon.vue"),
      name: "partners",
      meta: {
        layout: "DefaultPage",
        title: "Partners",
      },
    },
    {
      path: "/partners/:partner",
      component: () => import("@/views/ComingSoon.vue"),
      name: "partner",
      meta: {
        layout: "DefaultPage",
      },
    },
    {
      path: "/articles",
      component: () => import("@/views/ComingSoon.vue"),
      name: "articles",
      meta: {
        layout: "DefaultPage",
        title: "All Articles",
      },
    },
    {
      path: "/articles/:article",
      component: () => import("@/views/ComingSoon.vue"),
      name: "article",
      meta: {
        layout: "DefaultPage",
      },
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
