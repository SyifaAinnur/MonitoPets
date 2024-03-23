<script setup>
//imports
import { onMounted, onUnmounted, ref } from "vue";
import logo from "~/images/logo.svg";
import burger from "~/icons/burger.svg";
import searchIconDark from "~/icons/search-dark.svg";
import searchIcon from "~/icons/search.svg";
import AppInput from "@/components/ui/AppInput.vue";
import AppAccordion from "@/components/ui/AppAccordion.vue";
import { menuItems } from "@/api/mock/menu";
import AppButton from "@/components/ui/AppButton.vue";
import down from "~/icons/down.svg";
import up from "~/icons/up.svg";
import AppSubMenu from "@/components/pieces/AppSubMenu.vue";
import { useCategoryStore } from "@/stores/category";
import { useRouter } from "vue-router";
import { Form as VeeForm } from "vee-validate";
import AppCurrencySwitcher from "@/components/pieces/AppCurrencySwitcher.vue";

const menuIsVisible = ref(false);
const searchIsVisible = ref(false);
const isOpen = ref(false);
const subMenu = ref(false);
const isScrolled = ref(false);
const router = useRouter();
const initialSearch = {
  search: localStorage.getItem("search") || "",
};
// Store
const categoryStore = useCategoryStore();

const { categories } = categoryStore;
// methods
const searchHandler = () => {
  searchIsVisible.value = !searchIsVisible.value;
  if (searchIsVisible.value && menuIsVisible.value)
    menuIsVisible.value = !menuIsVisible.value;
};
const menuHandler = () => {
  menuIsVisible.value = !menuIsVisible.value;
  if (menuIsVisible.value && searchIsVisible.value)
    searchIsVisible.value = !searchIsVisible.value;
};
const openHandler = (value) => {
  isOpen.value = value;
};

const searchSubmitHandler = (values, { resetForm }) => {
  localStorage.setItem("search", values.search);
  resetForm({
    values: {
      search: localStorage.getItem("search"),
    },
  });
  router.push({ name: "search", query: { s: values.search } });
};
const clickOutsideMainMenu = () => {
  if (subMenu.value) {
    subMenu.value = !subMenu.value;
  }
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>



<template>
  <header class="m-auto max-w-[1536px]" :class="{ 'sticky-header': isScrolled }" v-bind="$attrs">
    <div class="relative m-auto flex max-w-1180 items-center lg:px-[16px] lg:py-[28px] xl:px-0">
      <div
        class="flex flex-1 items-center justify-between pb-[11px] pl-[10px] pr-[14px] pt-[14px] lg:static lg:w-auto lg:justify-start lg:gap-[20px] lg:px-0 xl:gap-[40px]">
        <router-link :to="{ name: 'home' }" class="order-2 lg:order-1">
          <img :src="logo" alt="Monito Pets for Best" class="w-[92px] cursor-pointer lg:w-[115px]" />
        </router-link>
        <nav class="desktop-menu order-2 hidden lg:flex" v-click-outside="clickOutsideMainMenu">
          <ul class="flex lg:gap-[30px] xl:gap-[44px]">
            <template v-for="item in menuItems">
              <li v-if="item.children" @click="subMenu = !subMenu"
                class="flex cursor-pointer gap-[5px] underline-offset-4 hover:underline">
                <span class="text-body16b text-blue-dark">
                  {{ item.title }}
                </span>
                <img :src="up" v-show="subMenu" :alt="item.title" />
                <img :src="down" v-show="!subMenu" :alt="item.title" />
              </li>
              <li v-else class="underline-offset-4 hover:underline">
                <router-link :to="item.to" class="text-body16b text-blue-dark">
                  {{ item.title }}
                </router-link>
              </li>
            </template>
            <transition name="fade">
              <div v-show="subMenu" class="absolute bottom-[10px] left-0 z-50 w-full">
                <AppSubMenu @close-menu="subMenu = !subMenu" />
              </div>
            </transition>
          </ul>
        </nav>
        <div class="order-3 hidden w-[280px] min-w-fit lg:flex">
          <VeeForm @submit="searchSubmitHandler" class="w-full" :initial-values="initialSearch">
            <AppInput name="search" placeholder="Search something here!" :relative="true" :left-icon="searchIcon"
              class="rounded-[46px] border-transparent bg-neutral-0 pl-[48px]" />
          </VeeForm>
        </div>
        <nav class="lg:hidden">
          <img :src="burger" class="cursor-pointer" alt="menu" @click="menuHandler" />
          <transition name="fade">
            <ul
              class="absolute left-0 top-[58px] z-10 order-1 flex h-[500px] w-full flex-col divide-y divide-neutral-10 overflow-y-auto border-t border-t-neutral-20 bg-white px-[15px] py-[20px]"
              v-if="menuIsVisible">
              <li v-for="element in menuItems">
                <template v-if="element.children">
                  <AppAccordion :title="element.title" class="block py-[25px]">
                    <ul class="pl-[5px]">
                      <li v-for="child in categories">
                        <template v-if="child.children">
                          <AppAccordion :title="child.title" class="block py-[20px]">
                            <ul class="pl-[15px]">
                              <li v-for="child2 in child.children">
                                <router-link :to="{
    name: 'category',
    params: { category: child2.id },
  }" class="block py-[20px]" @click="menuIsVisible = !menuIsVisible">
                                  {{ child2.title }}
                                </router-link>
                              </li>
                            </ul>
                          </AppAccordion>
                        </template>
                        <router-link v-else :to="child.to" @click="menuIsVisible = !menuIsVisible"
                          class="block py-[25px]">
                          {{ child.title }}
                        </router-link>
                      </li>
                    </ul>
                  </AppAccordion>
                </template>
                <router-link :to="element.to" @click="menuIsVisible = !menuIsVisible" v-else class="block py-[25px]">
                  {{ element.title }}
                </router-link>
              </li>
            </ul>
          </transition>
        </nav>
        <div class="z-[1] order-3 lg:hidden">
          <img :src="searchIconDark" alt="mobile search icon" @click="searchHandler" class="cursor-pointer" />
          <transition name="fade">
            <div v-show="searchIsVisible">
              <VeeForm @submit="searchSubmitHandler" :initial-values="initialSearch">
                <AppInput name="search" placeholder="Search something here!"
                  class="absolute right-0 top-[58px] w-full rounded-none border-neutral-10 lg:static lg:block" />
              </VeeForm>
            </div>
          </transition>
        </div>
      </div>

      <div class="hidden basis-[30%] items-center justify-end gap-[20px] lg:flex xl:basis-[25%]">
        <AppButton class="bg-blue-dark px-[30px] py-[10px] text-body16m text-neutral-0 hover:bg-blue-dark/[90%]">
          Join the community
        </AppButton>
        <AppCurrencySwitcher :isOpen="isOpen" @open-handler="openHandler" />
      </div>
    </div>
    <!-- for banner-->
  </header>
  <slot name="banner" />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.sticky-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #FCECCE;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in;
}
</style>