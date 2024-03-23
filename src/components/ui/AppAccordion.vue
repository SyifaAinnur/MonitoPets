<script setup>
import { ref } from "vue";
import up from "~/icons/up.svg";
import down from "~/icons/down.svg";

const { title, open, fullWith } = defineProps({
  title: {
    type: String,
    required: true,
  },
  open: {
    type: Boolean,
    default: false,
    required: false,
  },
  fullWith: {
    type: Boolean,
    default: true,
  },
});

const isOpen = ref(open);
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <span
    @click="isOpen = !isOpen"
    class="flex cursor-pointer gap-[10px]"
    :class="{ 'justify-between': fullWith }"
    v-bind="$attrs"
  >
    {{ title }}
    <img :src="down" v-if="!isOpen" alt="icon" class="w-[12px]" />
    <img :src="up" v-else alt="icon" class="w-[12px]" />
  </span>
  <transition name="fade">
    <div v-show="isOpen">
      <slot />
    </div>
  </transition>
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
</style>
