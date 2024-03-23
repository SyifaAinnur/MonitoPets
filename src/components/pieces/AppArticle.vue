<script setup>
const { article } = defineProps({
  article: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex flex-col gap-[10px] rounded-[12px] bg-white p-[8px] pb-[20px] shadow-product"
  >
    <router-link :to="{ name: 'article', params: { article: article.id } }">
      <img
        :src="article.picture"
        :alt="article.title"
        class="mb-[5px] aspect-[366/240] w-full rounded-[10px] object-cover object-top"
      />
    </router-link>
    <div class="flex flex-col gap-[10px] px-[8px]">
      <span
        class="self-start rounded-[28px] bg-sea px-[10px] py-[2px] text-center text-body10b text-neutral-0"
      >
        <router-link :to="{ name: 'articles', query: { cat: article.catId } }">
          {{ article.category }}
        </router-link>
      </span>
      <router-link
        :to="{ name: 'article', params: { article: article.id } }"
        class="text-body16b text-neutral-100"
      >
        {{ article.title }}
      </router-link>
      <p class="text-[14px] font-[400] text-neutral-80">
        {{ article.shortDescription }}
      </p>
    </div>
  </div>
</template>
