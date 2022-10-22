<template>
  <div class="home">
    <TodoPage></TodoPage>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoPage from "@/components/TodoPage.vue";

export default {
  name: "HomeView",
  components: {
    TodoPage,
  },
};
</script>
