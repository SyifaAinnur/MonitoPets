import { defineStore, storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useCurrencyStore } from "@/stores/currency";
import { productsList } from "@/api/mock/products";
import { flattenObject } from "@/helpers/functions";

export const useProductStore = defineStore("product", () => {
  const currencyStore = useCurrencyStore();
  const { currentRate } = storeToRefs(currencyStore);
  const initialProducts = ref(productsList);
  const product = ref({});

  const products = computed(() => {
    return initialProducts.value.map((product) => flattenObject(product));
  });

  const exchangeRateProducts = computed(() => {
    return products.value.map((product) => {
      return {
        ...product,
        price: product.price
      };
    });
  });
  const setProduct = (id) => {
    product.value = exchangeRateProducts.value.find(
      (product) => product.id === +id
    );
  };

  return {
    products,
    product,
    exchangeRateProducts,
    setProduct,
  };
});
