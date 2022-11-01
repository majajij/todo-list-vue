<template>
  <div>
    <router-view />
    <notifications />
    <MyConfirm></MyConfirm>
  </div>
</template>

<style>
</style>

<script setup>
import MyConfirm from "@/components/shared/MyConfirm.vue";
</script>