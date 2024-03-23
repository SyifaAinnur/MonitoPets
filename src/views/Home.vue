<script setup>
import AppButton from "@/components/ui/AppButton.vue";
// import { usePartnersStore } from "@/stores/partners";
import { useProductStore } from "@/stores/products";
import right2 from "~/icons/right-2.svg";
import playIcon from "~/icons/play-icon.svg";
import pawIcon from "~/icons/paw.svg";
import handImage from "~/images/hand.png";
import AppProductsGrid from "@/components/pieces/AppProductsGrid.vue";
import bannerImage from "~/images/banner-image-2.png";
// import AppArticleGrid from "@/components/pieces/AppArticleGrid.vue";
import AppModal from "@/components/ui/AppModal.vue";
import { ref } from "vue";
import { storeToRefs } from "pinia";

// const partnersStore = usePartnersStore();
const productStore = useProductStore();
const { exchangeRateProducts } = storeToRefs(productStore);
// const { partners } = partnersStore;
const isOpen = ref(false);
</script>

<template>
  <main class="m-auto max-w-1180 px-[16px] xl:px-0">
    <section class="products-1">
      <div class="mb-[28px] flex items-center justify-between">
        <div>
          <h6 class="text-body14m text-black sm:text-body16m">Whats new?</h6>
          <h3 class="text-body20b sm:text-head24b">
            Take a look at some of our pets
          </h3>
        </div>
        <router-link :to="{ name: 'products' }">
          <AppButton
            :right-icon="right2"
            class="hidden border-[1.5px] border-blue-dark pb-[12px] pt-[12px] sm:flex"
          >
            View more
          </AppButton>
        </router-link>
      </div>
      <AppProductsGrid :products="exchangeRateProducts" :first="0" :last="8" />
      <router-link to="/products">
        <AppButton
          :right-icon="right2"
          class="mt-[16px] flex w-full gap-[8px] border-[1.5px] border-blue-dark sm:hidden"
        >
          View more
        </AppButton>
      </router-link>
    </section>
    <section class="banner-1 mt-[40px] overflow-hidden rounded-[20px] bg-blue">
      <div
        class="flex flex-col bg-[url('~/images/mobile-yellow-top.svg')] bg-[length:100%_auto] bg-[center_top_-30px] bg-no-repeat p-0 sm:bg-[center_top_-240px] lg:flex-row-reverse lg:bg-[url('~/images/banner-2-dark.svg')] lg:bg-[left_bottom_-180px]"
      >
        <div
          class="bg-[left_bottom] bg-no-repeat px-[20px] pb-[38px] pt-[27px] text-center md:basis-7/12 md:bg-[url('~/images/banner-2-orange.svg')] md:bg-[length:100%_100%] lg:flex lg:flex-col lg:items-end lg:pr-[80px] lg:pt-[70px] lg:text-right"
        >
          <h2 class="text-head36b font-[800] lg:text-head52xb">
            One more friend
          </h2>
          <h3 class="text-head24b lg:text-head36b">Thousands more fun!</h3>
          <p class="mt-[12px] text-body12m lg:max-w-[80%]">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div
            class="mt-[32px] flex justify-around sm:justify-center sm:gap-[50px] lg:gap-[20px]"
          >
            <AppButton
              :right-icon="playIcon"
              class="border-[1.5px] border-blue-dark"
              @click="isOpen = !isOpen"
            >
              View Intro
            </AppButton>
            <AppButton class="bg-blue-dark text-white">Explore Now</AppButton>
          </div>
        </div>
        <div
          class="flex flex-col items-center justify-end bg-[url('~/images/banner-2-dark.svg')] bg-[left_bottom_-120px] bg-no-repeat md:basis-5/12 md:pt-[50px] xl:bg-none"
        >
          <img
            :src="bannerImage"
            alt="banner image"
            class="h-auto w-[80%] sm:mx-[20%] lg:w-auto"
          />
        </div>
      </div>
    </section>
    <section class="products-2 mb-[104px] mt-[86px] hidden md:block">
      <div class="mb-[28px] flex items-center justify-between">
        <div>
          <h6 class="text-body14m text-black sm:text-body16m">
            Hard to choose right products for your pets?
          </h6>
          <h3 class="text-body20b sm:text-head24b">Our Products</h3>
        </div>
        <router-link to="/product">
          <AppButton
            :right-icon="right2"
            class="hidden border-[1.5px] border-blue-dark pb-[12px] pt-[12px] sm:flex"
          >
            View more
          </AppButton>
        </router-link>
      </div>
      <AppProductsGrid :products="exchangeRateProducts" :first="8" />
      <router-link to="/products">
        <AppButton
          :right-icon="right2"
          class="mt-[16px] flex w-full gap-[8px] border-[1.5px] border-blue-dark sm:hidden"
        >
          View more
        </AppButton>
      </router-link>
    </section>
    <section class="partners mt-[40px] hidden xl:block">
      <div class="mb-[28px] flex items-center justify-between">
        <div>
          <h3 class="text-head24b">
            <span class="mr-[8px] text-body16m text-black"
              >Proud to be part of</span
            >Pet Sellers
          </h3>
        </div>
        <AppButton
          :right-icon="right2"
          class="hidden border-[1.5px] border-blue-dark pb-[12px] pt-[12px] sm:flex"
        >
          <router-link to="/partners">View all our sellers</router-link>
        </AppButton>
      </div>
      <div class="grid grid-cols-7 items-center gap-[20px]">
        <router-link
          v-for="partner in partners"
          :to="{ name: 'partner', params: { partner: partner.id } }"
          :key="partner.id"
          class="flex justify-center"
        >
          <img
            :src="partner.picture"
            :alt="partner.name"
            class="max-h-[90%] max-w-[70%]"
          />
        </router-link>
      </div>
    </section>
    <section
      class="banner-2 mb-[60px] mt-[40px] hidden overflow-hidden rounded-[20px] bg-[#FFB775] bg-[url('~/images/banner-3-light.svg')] bg-contain bg-[bottom_left] bg-no-repeat lg:flex"
    >
      <div
        class="flex w-full bg-[url('~/images/banner-3-orange.svg')] bg-[bottom_right] bg-no-repeat"
      >
        <div class="basis-6/12 pb-[56px] pl-[85px] pt-[64px]">
          <div class="flex items-baseline gap-[16px]">
            <h2 class="text-head52xb">Adoption</h2>
            <img :src="pawIcon" alt="Paw icon" />
          </div>
          <h2 class="text-head36b">We need help. so do they.</h2>
          <p class="mb-[42px] mt-[8px] text-body12m text-neutral-80">
            Adopt a pet and give it a home, <br />it will be love you back
            unconditionally.
          </p>
          <div class="flex gap-[20px]">
            <AppButton class="bg-blue-dark text-neutral-0">
              Explore Now
            </AppButton>
            <AppButton
              :right-icon="playIcon"
              class="border-[1.5px] border-blue-dark"
              @click="isOpen = !isOpen"
            >
              View Intro
            </AppButton>
          </div>
        </div>
        <div class="basis-6/12">
          <img :src="handImage" class="" alt="hand image" />
        </div>
      </div>
    </section>
    <section class="articles mt-[40px]">
      <div class="mb-[28px] flex items-center justify-between">
        <div>
          <h6 class="text-body14m text-black sm:text-body16m">
            You already know ?
          </h6>
          <h3 class="text-body20b sm:text-head24b">Useful pet knowledge</h3>
        </div>
        <router-link to="/articles">
          <AppButton
            :right-icon="right2"
            class="hidden border-[1.5px] border-blue-dark pb-[12px] pt-[12px] sm:flex"
          >
            View more
          </AppButton>
        </router-link>
      </div>
      <!-- <AppArticleGrid :first="0" :last="3" /> -->
    </section>
  </main>
  <teleport to="body">
    <!--<transition name="fade">-->
    <div v-show="isOpen">
      <AppModal :isOpen="isOpen" @close-handler="isOpen = !isOpen">
        <h2 class="text-center text-head36b">Adopt dog</h2>
        <div class="aspect-video overflow-hidden">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/YQDDm9HLkV4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </AppModal>
    </div>
    <!--</transition>-->
  </teleport>
</template>
