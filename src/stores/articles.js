import { defineStore } from "pinia";
import { ref } from "vue";
import article1 from "~/images/article-1.jpg";
import article2 from "~/images/article-2.jpg";
import article3 from "~/images/article-3.jpg";

export const useArticlesStore = defineStore("articles", () => {
  const categoryList = ref([
    { id: 1, title: "Pet knowledge" },
    { id: 2, title: "Cats" },
    { id: 3, title: "Dogs" },
    { id: 4, title: "Fish" },
  ]);
  const articles = ref([
    {
      id: 5,
      category: categoryList.value[0].title,
      picture: article1,
      catId: categoryList.value[0].id,
      title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
      shortDescription:
        "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.",
      description:
        "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.",
    },
    {
      id: 6,
      category: categoryList.value[0].title,
      catId: categoryList.value[0].id,
      picture: article2,
      title: "Dog Diet You Need To Know",
      shortDescription:
        "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.",
      description:
        "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.",
    },
    {
      id: 7,
      category: categoryList.value[1].title,
      catId: categoryList.value[1].id,
      picture: article3,
      title:
        "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
      shortDescription:
        "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.",
      description:
        "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.",
    },
    {
      id: 8,
      category: categoryList.value[2].title,
      catId: categoryList.value[2].id,
      picture: article1,
      title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
      shortDescription:
        "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.",
      description:
        "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.",
    },
  ]);
  return { articles, categoryList };
});
