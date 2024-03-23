<script setup>
// imports
import down from "~/icons/down.svg";
import up from "~/icons/up.svg";
import { storeToRefs } from "pinia";
import { useCurrencyStore } from "@/stores/currency";

// vars
const { isOpen } = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(["open-handler"]);

// stores
const currencyStore = useCurrencyStore();
const { currentCurrency } = storeToRefs(currencyStore);
const { currencyList, setCurrentCurrency } = currencyStore;

//  handlers
const currencyToggleHandler = (index) => {
  emit("open-handler", false);
  setCurrentCurrency(index);
  window.localStorage.setItem("currency", index);
};
</script>

<template>
  <div
    class="relative flex w-[70px] cursor-pointer items-center gap-[4px]"
    @click="emit('open-handler', !isOpen)"
  >
    <img
      :src="currentCurrency.flag"
      :alt="currencyList['currency']"
      class="h-[20px] w-[20px] rounded-full border border-neutral-10 object-cover"
    />
    <span class="flex justify-between gap-[5px]">
      {{ currentCurrency.currency }}
      <img :src="down" v-if="!isOpen" alt="icon" class="w-[12px]" />
      <img :src="up" v-else alt="icon" class="w-[12px]" />
    </span>
    <transition name="fade">
      <nav v-if="isOpen">
        <ul
          class="absolute right-0 top-[30px] z-[1000] w-[100px] rounded-[6px] border border-neutral-20 bg-white px-[20px] py-[10px]"
        >
          <li
            v-for="(curr, index) in currencyList"
            :key="curr.code"
            @click.stop="currencyToggleHandler(index)"
            class="flex items-center gap-[4px] py-[10px] hover:cursor-pointer"
          >
            <img
              :src="curr.flag"
              :alt="curr.currency"
              class="h-[20px] w-[20px] rounded-full border border-neutral-10 object-cover"
            />
            <span>{{ curr.currency }}</span>
          </li>
        </ul>
      </nav>
    </transition>
  </div>
</template>
