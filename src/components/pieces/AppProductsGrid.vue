<script setup>
import AppProduct from "@/components/pieces/AppProduct.vue";

const {} = defineProps({
  first: {
    type: Number,
    required: true,
  },
  last: {
    type: Number,
    required: false,
  },
  products: {
    type: Array,
    required: true,
  },
  grid4: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div
    class="grid grid-cols-2 gap-[20px] sm:grid-cols-3"
    :class="{ 'lg:grid-cols-4': grid4, 'lg:grid-cols-3': !grid4 }"
  >
    <AppProduct
      :product="product"
      v-for="product in products.slice(first, last)"
    >
    </AppProduct>
  </div>
</template>
