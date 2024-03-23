<script setup>
import saleIcon from "~/icons/gift.svg";
import { useCurrencyStore } from "@/stores/currency";
import { storeToRefs } from "pinia";
import { currencyFormat } from "@/helpers/functions";

const currencyStore = useCurrencyStore();
const { currentCurrency } = storeToRefs(currencyStore);

const { product } = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="basis-3/12 rounded-[12px] bg-neutral-0 px-[8px] pb-[20px] pt-[8px] shadow-product"
  >
    <div class="flex flex-col gap-[16px]">
      <router-link :to="{ name: 'product', params: { product: product.id } }">
        <img
          :src="product.image"
          :alt="product.title"
          class="aspect-square w-full rounded-[12px] object-cover object-center"
        />
      </router-link>
      <div class="flex flex-col gap-[4px] px-[8px]">
        <router-link
          :to="{ name: 'product', params: { product: product.id } }"
          class="text-body14b text-neutral-100 sm:text-body16b"
        >
          {{ product.title }}
        </router-link>
        <div class="flex gap-[10px] text-body12m text-neutral-60">
          <div v-if="product.gender">
            Gene:
            <strong class="font-[700]">
              {{ product.gender }}
            </strong>
          </div>
          <span class="relative -top-[5px] hidden text-[22px] md:inline-block"
            >.</span
          >
          <div v-if="product.age">
            Age:
            <strong class="font-[700]">{{ product.age }}</strong>
          </div>
        </div>
        <div class="text-body16b text-neutral-100 sm:text-body14b">
          {{
            currencyFormat(
              product,
              currentCurrency.code,
              currentCurrency.currency
            )
          }}
        </div>
        <div
          v-if="product.sale"
          class="mt-[18px] flex w-full gap-[10px] rounded-[8px] bg-yellow/40 pb-[6px] pl-[15px] pt-[8px]"
        >
          <img :src="saleIcon" alt="sale icon" />
          <span class="flex gap-[10px] text-body14b text-blue-dark/80">
            <span class="relative -top-[5px] text-[22px]">.</span>
            {{ product.sale }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
