<template>
  <div>
    <PageHeading title="To Do">
      <template v-slot:actions>
        <!-- <span class="ml-3 hidden sm:block">
          <button
            type="button"
            class="
              inline-flex
              items-center
              rounded-md
              bg-red-500
              px-4
              py-2
              text-sm
              font-medium
              text-white
              shadow-sm
              hover:bg-red-700
              focus:outline-none
              focus:ring-2
              focus:ring-indigo-500
              focus:ring-offset-2
            "
          >
            <i class="mdi mdi-trash-can mdi-18px"></i>
            Reset List
          </button>
        </span> -->

        <!-- <span class="sm:ml-3">
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
          >
            <i class="mdi mdi-rotate-right mr-2"></i>
            Update
          </button>
        </span> -->

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
            v-for="item in 20"
            :key="item"
            class="font-semibold bg-slate-600 py-1 px-2 my-1 rounded-lg"
          >
            <div class="flex justify-between">
              <div>
                <label>
                  <input type="checkbox" class="mr-2" />
                  <span>List</span>
                </label>
              </div>
              <div @click="deleteListHandler(5)">
                <i class="mdi mdi-trash-can text-white hover:text-red-500"></i>
              </div>
            </div>
          </li>
        </ul>
        <div class="float-right mt-2">
          <span class="font-bold text-white"
            >Total: <span class="text-emerald-300">100</span> item(s)</span
          >
        </div>
      </div>
      <div
        class="bg-slate-700 rounded ml-1 mr-2 p-3 text-white height-container"
      >
        <span class="font-bold"> History </span>
        <div class="overflow-auto height-over">
          <p v-for="item in 30" :key="item" class="m-1">
            User 1 <span class="badge-warning">added</span> a new item at
            12:30:45 12:00:00
          </p>
        </div>
        <div class="float-right mt-2">
          <span class="font-bold text-white"
            >Total: <span class="text-emerald-300">100</span> action(s)</span
          >
        </div>
      </div>
    </div>
    <MyModal :show="showModal" />
  </div>
</template>

<script setup>
import PageHeading from "./PageHeading.vue";
import MyModal from "@/components/shared/MyModal.vue";
import { computed } from "vue";

let modal = false;
// let titleModal;

const showModal = computed(() => modal);

const newTaskHandler = () => {
  // alert(list_id);
  modal = true;
  // titleModal = "Add new Task";
  console.log(modal);
};

const deleteListHandler = (list_id) => {
  alert(list_id);
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