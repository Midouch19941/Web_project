// stores/counter.js
import { defineStore } from "pinia";
import { api } from "../services/axios";

export const useReviewStore = defineStore("review", {
  state: () => {
    return {
      reservations: [],
    };
  },
  actions: {
    async getReviews() {
      try {
        const res = await api.get("/reviews");
        this.reservations = res;
      } catch (err) {
        console.log(err);
      }
    },
    async addReview(data) {
      return await api.post("/reviews", data);
    },
  },
});
