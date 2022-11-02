<template>
  <div>
    <HeadingPage title="Profil" />
    <div class="bg-slate-300 p-2 m-2">
      <div class="rounded flex flex-col" style="width: 200px">
        <label for="">Name:</label>
        <input type="text" name="" id="" class="rounded ring-red-500" />
        <label for="">Email:</label>
        <input type="email" name="" id="" class="rounded ring-red-500" />
        <label for="">Created at:</label>
        <input type="date" name="" id="" class="rounded ring-red-500" />
      </div>
    </div>
  </div>
</template>

<script setup>
import HeadingPage from "@/components/HeadingPage.vue";
</script>
