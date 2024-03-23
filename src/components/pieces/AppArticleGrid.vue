<script setup>
import { useArticlesStore } from "@/stores/articles";
import AppArticle from "@/components/pieces/AppArticle.vue";

const {} = defineProps({
  first: {
    type: Number,
  },
  last: {
    type: Number,
    default: 100,
  },
});
const articlesStore = useArticlesStore();
const { articles } = articlesStore;
</script>

<template>
  <div class="grid-col-1 grid gap-[20px] sm:grid-cols-2 md:grid-cols-3">
    <AppArticle
      v-for="article in articles.slice(first, last)"
      :article="article"
      :key="article.id"
    />
  </div>
</template>
