<script setup>
import Header from "@/components/TheHeader.vue";
import Footer from "@/components/TheFooter.vue";
import mobileImage from "~/images/mobile-image.png";
import desktopImage from "~/images/banner-image.png";
import playIcon from "~/icons/play-icon.svg";
import AppButton from "@/components/ui/AppButton.vue";
import { ref } from "vue";
import AppModal from "@/components/ui/AppModal.vue";

const isOpen = ref(false);
</script>

<template>
  <header
    class="mb-[40px] overflow-hidden rounded-bl-[20px] rounded-br-[20px] bg-bgFooter md:mb-[60px]"
  >
    <div
      class="bg-[url('~/images/mobile-logo-bg.svg')] bg-[top_-50px_center] bg-no-repeat lg:bg-none"
    >
      <Header
        class="bg-[top_-60px_left_-454px] bg-no-repeat lg:bg-[url('~/images/home-header-bg-image.svg')] xl:bg-[top_-60px_left_-390px] 2xl:bg-[top_-60px_left_-190px]"
      >
        <template v-slot:banner>
          <div
            class="m-auto flex max-w-1180 flex-col justify-between lg:flex-row lg:bg-none"
          >
            <div
              class="basis-6/12 bg-none bg-no-repeat px-[16px] lg:bg-[url('~/images/orange-banner-bottom-left.svg')] lg:bg-[bottom_0_left_-160px] lg:pt-[30px] xl:basis-4/12 xl:px-0"
            >
              <div class="text-blue-dark">
                <h2
                  class="relative inline-block text-head46xb after:absolute after:bottom-[5px] after:right-[2px] after:h-[15px] after:w-[15px] after:bg-[url('~/images/orange-banner-big.svg')] after:bg-cover after:bg-no-repeat sm:block sm:after:right-[20%] lg:bg-[url('~/images/title-back.svg')] lg:bg-[length:10%] lg:bg-[top_0_left_0] lg:bg-no-repeat lg:after:hidden xl:bg-[length:15%]"
                >
                  One more friend
                </h2>
                <h3
                  class="relative inline-block text-head28b after:absolute after:-right-[29px] after:bottom-[10px] after:h-[21px] after:w-[21px] after:bg-[url('~/icons/mobile-head-2bg.svg')] after:bg-cover after:bg-no-repeat sm:block sm:after:right-[40%] lg:after:hidden"
                >
                  Thousands more fun!
                </h3>
              </div>
              <p class="mt-[12px] text-body12m sm:text-body14m">
                Having a pet means you have more joy, a new friend, a happy
                person who will always be with you to have fun. We have 200+
                different pets that can meet your needs!
              </p>
              <div class="mb-[30px] mt-[32px] flex gap-[16px]">
                <AppButton
                  :right-icon="playIcon"
                  class="border-[1.5px] border-blue-dark bg-transparent px-[30px] py-[10px]"
                  @click="isOpen = !isOpen"
                >
                  View Intro
                </AppButton>
                <AppButton class="bg-blue-dark px-[30px] py-[10px] text-white">
                  Explore Now
                </AppButton>
              </div>
            </div>
            <div class="flex basis-6/12 justify-end lg:hidden">
              <img
                :src="mobileImage"
                alt="banner image"
                class="h-auto w-full"
              />
            </div>
            <div class="hidden basis-6/12 lg:flex xl:basis-8/12">
              <img :src="desktopImage" alt="banner image" />
            </div>
          </div>
        </template>
      </Header>
    </div>
  </header>
  <slot />
  <Footer />
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

<!--<style scoped>-->
<!--.fade-enter-active,-->
<!--.fade-leave-active {-->
<!--  transition: opacity 0.3s ease;-->
<!--}-->

<!--.fade-enter-from,-->
<!--.fade-leave-to {-->
<!--  opacity: 0;-->
<!--}-->
<!--</style>-->
