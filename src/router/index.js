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
      // component: () => import("@/views/Category.vue"),
      name: "category",
      meta: {
        layout: "CategoryPage",
      },
    },
    {
      path: "/category",
      // component: () => import("@/views/AllCategory.vue"),
      name: "all-category",
      meta: {
        layout: "DefaultPage",
        title: "Category",
      },
    },
    {
      path: "/product/:product",
      // component: () => import("@/views/Product.vue"),
      name: "product",
      meta: {
        layout: "ProductPage",
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
      // component: () => import("@/views/AllProducts.vue"),
      name: "products",
      meta: {
        layout: "DefaultPage",
        title: "All Products",
      },
    },
    {
      path: "/partners",
      name: "partners",
      meta: {
        layout: "DefaultPage",
        title: "Partners",
      },
    },
    {
      path: "/partners/:partner",
      name: "partner",
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
