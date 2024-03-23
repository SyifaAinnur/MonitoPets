<script setup>
import { useRoute } from "vue-router";
import { useSearchStore } from "@/stores/search";
import { storeToRefs } from "pinia";
import AppProductsGrid from "@/components/pieces/AppProductsGrid.vue";

const searchStore = useSearchStore();
const { getSearchProducts } = storeToRefs(searchStore);
const route = useRoute();
</script>

<template>
  <div class="m-auto max-w-1180 px-[16px] xl:px-0">
    <section class="mb-[30px] text-center text-head24b">
      <h1 v-if="route.query.s">Searching for</h1>
      <h2 class="text-body16b">{{ route.query.s }}</h2>
    </section>
    <section>
      <AppProductsGrid
        v-if="route.query.s"
        :products="getSearchProducts"
        :first="0"
      />
      <h2 v-else class="text-center text-head36b">
        Enter something in the search box
      </h2>
      <h2 v-if="!getSearchProducts.length" class="text-center text-head36b">
        Nothing found
      </h2>
    </section>
  </div>
</template>
