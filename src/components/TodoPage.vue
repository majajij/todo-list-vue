<template>
  <div>
    <HeadingPage title="Lists">
      <template #actions>
        <span class="sm:ml-3">
          <button
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
            @click="newTaskHandler"
          >
            New Task
          </button>
        </span>
      </template>
    </HeadingPage>

    <MyModal :show="modal" title="Add new task" @action="getActionModal">
      <template #m-body>
        <div>
          <div class="m-2 flex flex-col">
            <label for="task">Task:</label>
            <input
              id="task"
              v-model="task"
              type="text"
              name="task"
              class="rounded border border-gray-500 p-2"
            />
          </div>
          <div class="ml-2">
            <span class="italic">Date: </span>{{ curren_date }}
          </div>
        </div>
      </template>
    </MyModal>
    <div class="grid grid-cols-2 overflow-auto h-screen">
      <ListsItems />
      <HistoryUser />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import HeadingPage from "./HeadingPage.vue";
import MyModal from "@/components/shared/MyModal.vue";
import ListsItems from "@/components/ListsItems.vue";
import HistoryUser from "@/components/HistoryUser.vue";

const store = useStore();
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
</script>

<style lang="scss" scoped>
</style>