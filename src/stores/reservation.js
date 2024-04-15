// stores/counter.js
import { defineStore } from "pinia";
import { api } from "../services/axios";

export const useReservationStore = defineStore("reservation", {
  state: () => {
    return {
      reservations: [],
    };
  },
  actions: {
    async getReservation() {
      try {
        const res = await api.get("/reservations");
        this.reservations = res;
      } catch (err) {
        console.log(err);
      }
    },
    async addReservation(data) {
      return await api.post("/reservations", data);
    },
  },
});
