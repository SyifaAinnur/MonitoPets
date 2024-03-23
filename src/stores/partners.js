import { defineStore } from "pinia";
import { ref } from "vue";
import partner1 from "~/images/partners-1.png";
import partner2 from "~/images/partners-2.png";
import partner3 from "~/images/partners-3.png";
import partner4 from "~/images/partners-4.png";
import partner5 from "~/images/partners-5.png";
import partner6 from "~/images/partners-6.png";
import partner7 from "~/images/partners-7.png";

export const usePartnersStore = defineStore("partners", () => {
  const partners = ref([
    {
      id: 1,
      title: "Sheba",
      picture: partner1,
    },
    {
      id: 2,
      title: "Whiskas",
      picture: partner2,
    },
    {
      id: 3,
      title: "Bakers",
      picture: partner3,
    },
    {
      id: 4,
      title: "Felix",
      picture: partner4,
    },
    {
      id: 5,
      title: "Good boy",
      picture: partner5,
    },
    {
      id: 6,
      title: "Butcher's",
      picture: partner6,
    },
    {
      id: 7,
      title: "Pedigree",
      picture: partner7,
    },
  ]);

  return {
    partners,
  };
});
