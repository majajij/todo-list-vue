<template>
  <div>
    <div class="bg-slate-200 rounded ml-2 mr-1 p-3 height-container">
      <span class="font-bold text-black"> My List </span>
      <ul class="overflow-auto height-over">
        <li v-for="item in allTasks" :key="item" class="font-semibold my-2">
          <div class="flex justify-between">
            <div>
              <label>
                <input type="checkbox" class="mr-2" />
                <span>{{ item }}</span>
              </label>
            </div>
            <div @click="deleteTaskHandler(item)">
              <i class="mdi mdi-trash-can text-red-500 hover:text-red-800" />
            </div>
          </div>
        </li>
      </ul>
      <div class="float-right mt-2">
        <span class="font-bold text-black"
          >Total:
          <span class="text-blue-800">{{ allTasks.length }}</span>
          item(s)</span
        >
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