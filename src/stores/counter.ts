import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    todos: [],
    counter: 1,
  }),

  getters: {
    doubleCount: (state) => state.counter * 2,
  },

  actions: {
    async getTodos() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        this.todos = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
