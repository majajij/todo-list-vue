<template>
  <div>
    <div class="bg-slate-200 rounded ml-1 mr-2 p-3 text-black height-container">
      <span class="font-bold"> History </span>
      <div class="overflow-auto height-over">
        <p v-for="item in allHistories" :key="item" class="m-1 italic">
          <span
            class="p-1 rounded mr-2"
            :class="item.status == 1 ? 'badge-success' : 'badge-danger'"
          >
          </span>
          {{
            item.status == 1
              ? "Item added successfully"
              : "Item removed successfully"
          }}
        </p>
      </div>
      <div class="float-right mt-2">
        <span class="font-bold text-black"
          >Total: <span class="text-blue-800">100 </span> </span
        >action(s)
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

let allHistories = computed(() => store.getters.getHistories);
</script>

<style lang="css" scoped>
.height-over {
  height: calc(100vh - 250px);
}
.height-container {
  height: calc(100vh - 180px);
}
</style>