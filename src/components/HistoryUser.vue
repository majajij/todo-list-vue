<template>
  <div>
    <div class="bg-slate-700 rounded ml-1 mr-2 p-3 text-white height-container">
      <span class="font-bold"> History </span>
      <div class="overflow-auto height-over">
        <p
          v-for="item in allHistories"
          :key="item"
          class="m-1"
          :class="item.status == 1 ? 'badge-success' : 'badge-danger'"
        >
          <!-- User 1 added a new item at 12:30:45 12:00:00 -->
          {{
            item.status == 1
              ? "Item added successfully"
              : "Item removed successfully"
          }}
        </p>
      </div>
      <div class="float-right mt-2">
        <span class="font-bold text-white">Total: <span class="text-emerald-300">100</span> action(s)</span>
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