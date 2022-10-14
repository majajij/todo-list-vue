<template>
  <div>
    <PageHeading title="To Do" />
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
    <MyModal />
  </div>
</template>

<script setup>
import PageHeading from "./PageHeading.vue";
import MyModal from "@/components/shared/MyModal.vue";

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