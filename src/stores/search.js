import { defineStore } from "pinia";
import { computed } from "vue";
import { useProductStore } from "@/stores/products";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

export const useSearchStore = defineStore("search", () => {
  const productStore = useProductStore();
  const route = useRoute();
  const { exchangeRateProducts } = storeToRefs(productStore);

  const getSearchProducts = computed(() => {
    return exchangeRateProducts.value.filter((product) => {
      return product.title.toLowerCase().includes(route.query.s.toLowerCase());
    });
  });
  return {
    getSearchProducts,
  };
});
