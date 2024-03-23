<script setup>
const { leftIcon, rightIcon, centerIcon, centerInvertIcon } = defineProps({
  leftIcon: {
    type: String,
  },
  rightIcon: {
    type: String,
  },
  centerIcon: {
    type: String,
  },
  leftInvertIcon: {
    type: Boolean,
  },
  centerInvertIcon: {
    type: Boolean,
  },
  rightInvertIcon: {
    type: Boolean,
  },
});
</script>

<template>
  <button
    class="flex items-center justify-center gap-[8px] rounded-[57px] text-[16px] leading-[24px] transition-colors"
    :class="{
      'px-[30px] py-[10px] ': !centerIcon,
      'px-[14px] py-[14px]': centerIcon,
    }"
  >
    <template v-if="leftIcon">
      <img
        :src="leftIcon"
        alt=""
        class="h-[20px] w-[20px]"
        :class="{ 'brightness-0 invert': leftInvertIcon }"
      />
    </template>
    <template v-if="!centerIcon">
      <slot />
    </template>
    <template v-else>
      <img
        :src="centerIcon"
        alt=""
        class="h-[15px] w-[15px]"
        :class="{ 'brightness-0 invert': centerInvertIcon }"
      />
    </template>
    <template v-if="rightIcon">
      <img
        :src="rightIcon"
        alt=""
        class="h-[15px] w-[15px]"
        :class="{ 'brightness-0 invert':  rightInvertIcon }"
      />
    </template>
  </button>
</template>
