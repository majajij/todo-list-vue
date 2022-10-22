<template>
  <div>
    <div class="bg-slate-700 rounded ml-2 mr-1 p-3 height-container">
      <span class="font-bold text-white"> My List </span>
      <ul class="overflow-auto height-over">
        <li
          v-for="item in allTasks"
          :key="item"
          class="font-semibold bg-slate-600 py-1 px-2 my-1 rounded-lg"
        >
          <div class="flex justify-between">
            <div>
              <label>
                <input
                  type="checkbox"
                  class="mr-2"
                >
                <span>{{ item }}</span>
              </label>
            </div>
            <div @click="deleteTaskHandler(item)">
              <i class="mdi mdi-trash-can text-white hover:text-red-500" />
            </div>
          </div>
        </li>
      </ul>
      <div class="float-right mt-2">
        <span class="font-bold text-white">Total:
          <span class="text-emerald-300">{{ allTasks.length }}</span>
          item(s)</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

let allTasks = computed(() => store.getters.getTasks);

const deleteTaskHandler = (param_task) => {
  store.dispatch("deleteFromList", { task: param_task });
};
</script>

<style lang="css" scoped>
.height-over {
  height: calc(100vh - 250px);
}
.height-container {
  height: calc(100vh - 180px);
}
</style>