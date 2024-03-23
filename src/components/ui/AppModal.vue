<script setup>
import closeIcon from "~/icons/close.svg";
import { onUnmounted, onMounted } from "vue";

const { isOpen, overflow } = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  overflow: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["closeHandler"]);
const listener = (e) => {
  if (e.code === "Escape") {
    emit("closeHandler");
  }
};
onMounted(() => {
  document.addEventListener("keyup", listener);
  if (overflow) {
    document.body.classList.add("overflow-hidden");
  }
});
onUnmounted(() => {
  document.removeEventListener("keyup", listener);
  document.body.classList.remove("overflow-hidden");
});
</script>

<template>
  <div v-if="isOpen">
    <div
      class="fixed inset-0 z-[1001] h-full w-full bg-blue-dark/70"
      @click="emit('closeHandler')"
    ></div>
    <div
      class="fixed left-1/2 top-1/2 z-[1002] max-h-[90%] w-10/12 min-w-[320px] -translate-x-[50%] -translate-y-[50%] overflow-y-auto rounded-[16px] bg-white px-[40px] pb-[35px] pt-[20px] shadow-dropDown md:w-auto md:min-w-[600px]"
    >
      <img
        :src="closeIcon"
        alt="close"
        class="absolute right-[16px] top-[16px] h-[30px] w-[30px] cursor-pointer"
        @click="emit('closeHandler')"
      />
      <slot />
    </div>
  </div>
</template>
