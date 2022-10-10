<template>
  <div class="home">
    <ListsItems />
  </div>
</template>

<script>
// @ is an alias to /src
import ListsItems from "@/components/ListsItems.vue";

export default {
  name: "HomeView",
  components: {
    ListsItems,
  },
};
</script>
