import { defineStore } from "pinia";
import todos from "@/services/todos"

export const useCounterStore = defineStore("todos", {
  state: () => ({
    todos: [],
  }),

  getters: {},

  actions: {
    async getTodos() {
      try {
        const response = await  todos.getAll()
        this.todos = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
