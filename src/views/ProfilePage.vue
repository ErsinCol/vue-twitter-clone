<script setup>
import {useRoute} from "vue-router";

const route = useRoute();
</script>

<template>
  <!-- todo => mevcut olmayan bir kullanıcı durumunda hata sayfası, kullanıcı adında boşluk olması durumundaki hata sayfası -->
  <h2>Profile Page - {{ route.params.username }}</h2>
</template>

<style scoped></style>