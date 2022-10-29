<template>
  <div>
    <div class="bg-slate-200 rounded ml-2 mr-1 p-3 height-container">
      <span class="font-bold text-black"> My List </span>
      <ul class="overflow-auto height-over">
        <li v-for="item in allTasks" :key="item.id" class="my-2">
          <div class="flex justify-between">
            <div>
              <label>
                <input type="checkbox" class="mr-2" />
                <span>{{ item.task }}</span>
              </label>
            </div>
            <div @click="deleteTaskHandler(item.id)">
              <i class="mdi mdi-trash-can text-red-500 hover:text-red-800" />
            </div>
          </div>
        </li>
      </ul>
      <div class="float-right mt-2">
        <span class="font-bold text-black"
          >Total: <span class="text-blue-800">{{ allTasks.length }} </span>
        </span>
        item(s)
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { notify } from "@kyvg/vue3-notification";

const store = useStore();

store.dispatch("getList").catch((err) => {
  notify({
    title: "Error",
    type: "error",
    text: err.data.message,
  });
});

let allTasks = computed(() => store.getters.getTasks);

const deleteTaskHandler = (task_id) => {
  store
    .dispatch("deleteFromList", { task_id })
    .then((res) => {
      notify({
        title: "Remove",
        type: "success",
        text: "Deleted sucess fully",
      });
    })
    .catch((err) => {
      notify({
        title: "Remove",
        type: "error",
        text: err.data.message,
      });
    });
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