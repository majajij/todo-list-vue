<template>
  <div>
    <PageHeading title="ToDos">
      <template v-slot:actions>
        <span class="sm:ml-3">
          <button
            @click="newTaskHandler"
            type="button"
            class="
              inline-flex
              items-center
              rounded-md
              border border-transparent
              bg-indigo-600
              px-4
              py-2
              text-sm
              font-medium
              text-white
              shadow-sm
              hover:bg-indigo-700
              focus:outline-none
              focus:ring-2
              focus:ring-indigo-500
              focus:ring-offset-2
            "
          >
            New Task
          </button>
        </span>
      </template>
    </PageHeading>
    <div class="grid grid-cols-2 overflow-auto h-screen">
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
                  <input type="checkbox" class="mr-2" />
                  <span>{{ item }}</span>
                </label>
              </div>
              <div @click="deleteTaskHandler(item)">
                <i class="mdi mdi-trash-can text-white hover:text-red-500"></i>
              </div>
            </div>
          </li>
        </ul>
        <div class="float-right mt-2">
          <span class="font-bold text-white"
            >Total:
            <span class="text-emerald-300">{{ allTasks.length }}</span>
            item(s)</span
          >
        </div>
      </div>
      <div
        class="bg-slate-700 rounded ml-1 mr-2 p-3 text-white height-container"
      >
        <span class="font-bold"> History </span>
        <div class="overflow-auto height-over">
          <p
            v-for="item in 30"
            :key="item"
            class="m-1 badge-success odd:badge-warning"
          >
            User 1 added a new item at 12:30:45 12:00:00
          </p>
        </div>
        <div class="float-right mt-2">
          <span class="font-bold text-white"
            >Total: <span class="text-emerald-300">100</span> action(s)</span
          >
        </div>
      </div>
    </div>
    <MyModal :show="modal" title="Add new task" @action="getActionModal">
      <template v-slot:m-body>
        <div>
          <div class="m-2 flex flex-col">
            <label for="task">Task:</label>
            <input
              type="text"
              name="task"
              id="task"
              v-model="task"
              class="rounded border border-gray-500 p-2"
            />
          </div>
          <div class="ml-2">
            <span class="italic">Date: </span>{{ curren_date }}
          </div>
        </div>
      </template>
    </MyModal>
  </div>
</template>

<script setup>
import PageHeading from "./PageHeading.vue";
import MyModal from "@/components/shared/MyModal.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

// let allTasks = ref("");
// let allTasks = computed(() => );
let allTasks = computed(() => store.getters.getTasks);

// onBeforeMount(() => {
//   allTasks.value = store.getters.getTasks;
//   // let allTasks = computed(() => store.getters.getTasks);
// });

let modal = ref(false);

let task = ref("");
let curren_date = new Date().toLocaleDateString();

const getActionModal = (val) => {
  switch (val) {
    case "save":
      store.dispatch("addToList", { task: task.value });
      modal.value = false;
      task.value = "";
      break;

    case "cancel":
      modal.value = false;
      task.value = "";
      break;
  }
};

const newTaskHandler = () => {
  modal.value = true;
};

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