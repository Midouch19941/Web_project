// stores/counter.js
import { defineStore } from "pinia";
import { api } from "../services/axios";

export const useMenuStore = defineStore("Menu", {
  state: () => {
    return {
      Menus: [],
    };
  },
  actions: {
    async getMenus() {
      try {
        const res = await api.get("/Menus");
        this.Menus = res;
      } catch (err) {
        console.log(err);
      }
    },
    async addMenu(data) {
      return await api.post("/Menus", data);
    },
  },
});
