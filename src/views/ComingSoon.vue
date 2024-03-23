<script setup>
import bannerImage from "~/images/banner-image-2.png";
</script>
<template>
    <main class="m-auto max-w-1180 px-[16px] xl:px-0">
        <section class="banner-1 mt-[40px] overflow-hidden rounded-[20px] bg-blue">
            <div
                class="flex flex-col bg-[url('~/images/mobile-yellow-top.svg')] bg-[length:100%_auto] bg-[center_top_-30px] bg-no-repeat p-0 sm:bg-[center_top_-240px] lg:flex-row-reverse lg:bg-[url('~/images/banner-2-dark.svg')] lg:bg-[left_bottom_-180px]">
                <div
                    class="bg-[left_bottom] bg-no-repeat px-[20px] pb-[38px] pt-[27px] text-center md:basis-7/12 md:bg-[url('~/images/banner-2-orange.svg')] md:bg-[length:100%_100%] lg:flex lg:flex-col lg:items-end lg:pr-[80px] lg:pt-[70px] lg:text-right">
                    <h2 class="text-head36b font-[800] lg:text-head52xb">
                        Coming
                    </h2>
                    <h3 class="text-head24b lg:text-head36b">Soon</h3>
                    <p class="mt-[12px] text-body12m lg:max-w-[80%]">
                        Stay tune for the updated
                    </p>
                </div>
                <div
                    class="flex flex-col items-center justify-end bg-[url('~/images/banner-2-dark.svg')] bg-[left_bottom_-120px] bg-no-repeat md:basis-5/12 md:pt-[50px] xl:bg-none">
                    <img :src="bannerImage" alt="banner image" class="h-auto w-[80%] sm:mx-[20%] lg:w-auto" />
                </div>
            </div>
        </section>
    </main>
</template>