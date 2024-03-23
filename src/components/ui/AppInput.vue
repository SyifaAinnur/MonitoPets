<script setup>
import { useField } from "vee-validate";

const { label, icon, leftIcon, relative, rules, type, tagName, name } =
  defineProps({
    label: String,
    icon: String,
    leftIcon: String,
    relative: {
      type: Boolean,
    },
    tagName: {
      type: String,
      required: false,
      default: "input",
    },
    name: {
      type: String,
      required: false,
      default: "default",
    },
    rules: {
      type: Object,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },
  });

const { errorMessage, value, meta } = useField(name, rules);
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <template v-if="label">
    <label
      :for="name"
      class="mb-[10px] block w-full text-[15px] font-[500] text-neutral-80"
      >{{ label }}
    </label>
  </template>
  <div class="w-full" :class="{ relative: relative }">
    <template v-if="leftIcon">
      <img
        :src="leftIcon"
        alt="icon"
        class="absolute left-[14px] top-1/2 -translate-y-1/2 cursor-pointer"
      />
    </template>
    <component
      :name="name"
      :is="tagName"
      :id="name"
      :value="value"
      @input="value = $event.target.value"
      :type="type"
      class="w-full border border-neutral-40 px-[28px] py-[14px] text-[15px] font-[500] leading-[20px] text-neutral-80 placeholder-neutral-40"
      v-bind="$attrs"
      :class="{
        'bg-orange/10': !meta.valid && meta.dirty,
      }"
    />

    <template v-if="icon">
      <img
        :src="icon"
        alt="icon"
        class="absolute right-[14px] top-1/2 -translate-y-1/2"
      />
    </template>
    <span class="text-[12px] font-bold">{{ errorMessage }}</span>
  </div>
</template>
