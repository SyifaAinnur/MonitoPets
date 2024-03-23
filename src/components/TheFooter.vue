<script setup>
import AppInput from "@/components/ui/AppInput.vue";
import AppButton from "@/components/ui/AppButton.vue";
import logo from "~/images/logo.svg";
import * as menu from "@/api/mock/menu";
import { ref } from "vue";

const subscribe = ref("");
const subscribeHandler = () => {
  if (subscribe.value.length) console.log(subscribe.value);
};
</script>

<template>
  <footer
    class="mt-[60px] rounded-tl-[40px] rounded-tr-[40px] bg-bgFooter px-[16px] pb-[20px] pt-[40px] md:pb-[50px]"
  >
    <div class="m-auto max-w-1180">
      <div
        class="mb-[40px] flex flex-wrap items-center rounded-[16px] bg-blue-dark p-[16px] md:flex-nowrap md:gap-[20px] md:p-[32px]"
      >
        <span
          class="w-full text-body20b text-neutral-0 md:basis-[40%] lg:text-head24b"
          >Register now so you don't miss our programs</span
        >
        <form
          class="mt-[16px] flex w-full flex-wrap gap-[12px] rounded-[14px] bg-white p-[12px] md:mt-0 md:basis-[60%] md:flex-nowrap"
          @submit.prevent="subscribeHandler"
        >
          <AppInput
            v-model.trim="subscribe"
            placeholder="Enter your Email"
            class="w-full rounded-[8px]"
            field-type="input"
          />
          <AppButton
            class="w-full rounded-[8px] bg-blue-dark px-[30px] py-[10px] text-white hover:bg-blue-dark/[90%] md:w-[163px] md:min-w-fit"
            >Subscribe Now
          </AppButton>
        </form>
      </div>
      <div
        class="mb-[36px] flex flex-wrap items-center justify-center gap-[20px] border-b border-b-neutral-20 pb-[40px] md:flex-nowrap md:justify-between"
      >
        <ul class="flex w-full justify-between md:justify-start md:gap-[60px]">
          <li v-for="item in menu.footerMenu" :key="item.to">
            <router-link
              :to="item.to"
              class="text-body16m text-neutral-100 underline-offset-4 hover:underline"
              >{{ item.title }}
            </router-link>
          </li>
        </ul>
        <ul
          class="flex w-full items-center justify-center gap-[40px] md:justify-end"
        >
          <li v-for="social in menu.socialItems" :key="social.link" class="">
            <a :href="social.link" target="_blank"
              ><img :src="social.icon" :alt="social.link"
            /></a>
          </li>
        </ul>
      </div>
      <div
        class="flex flex-wrap items-center justify-between text-neutral-60 md:flex-nowrap"
      >
        <p
          class="order-3 w-full text-center text-body10n md:order-1 md:text-left md:text-body14m"
        >
          &copy; {{ new Date().getFullYear() }} Monito. All rights reserved.
        </p>
        <router-link
          :to="{ name: 'home' }"
          class="order-1 flex w-full justify-center md:order-2"
          ><img
            :src="logo"
            alt="Monito Pets for Best"
            class="mb-[32px] md:mb-0"
        /></router-link>
        <ul
          class="order-2 mb-[8px] flex w-full justify-center gap-[12px] md:order-3 md:mb-0 md:justify-end lg:gap-[35px]"
        >
          <li v-for="item in menu.menu2Items">
            <router-link :to="item.to">{{ item.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
