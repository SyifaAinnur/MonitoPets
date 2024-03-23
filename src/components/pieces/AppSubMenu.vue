<script setup>
import banner from "~/images/menu-image.png";
import rightIcon from "~/icons/right.svg";
import { useCategoryStore } from "@/stores/category";
import { storeToRefs } from "pinia";

const emit = defineEmits(["closeMenu"]);
const categoryStore = useCategoryStore();
const { categories } = storeToRefs(categoryStore);
</script>

<template>
  <div
    class="absolute flex h-[500px] max-h-screen w-full justify-between gap-[120px] overflow-y-auto rounded-[12px] bg-white px-[40px] py-[34px] shadow-menu"
  >
    <ul class="flex basis-8/12 justify-between">
      <template v-for="item in categories">
        <li
          v-if="item.children"
          class="space-y-[11px] text-body14n text-neutral-100"
        >
          <router-link
            :to="{ name: 'category', params: { category: item.id } }"
            class="flex gap-[4px] text-body16b text-blue-dark/80"
            @click="emit('closeMenu')"
          >
            <span>{{ item.title }}</span>
            <img :src="rightIcon" alt="open menu" />
          </router-link>
          <ul class="space-y-[15px]">
            <template v-for="child in item.children">
              <li>
                <router-link
                  :to="{ name: 'category', params: { category: child.id } }"
                  @click="emit('closeMenu')"
                >
                  {{ child.title }}
                </router-link>
              </li>
            </template>
          </ul>
        </li>
        <li v-else>
          <router-link
            :to="{ name: 'category', params: { category: item.id } }"
            @click="emit('closeMenu')"
            >{{ item.title }}
          </router-link>
        </li>
      </template>
    </ul>

    <span><img :src="banner" alt="banner" /></span>
  </div>
</template>
