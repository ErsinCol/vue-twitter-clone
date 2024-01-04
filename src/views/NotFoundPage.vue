<script setup>
</script>
<template>
    <div>
        <h1 class="font-bold text-3xl">Not Found</h1>
        <p>
            Oops, we could not find that page. Try going <RouterLink :to="{ name: 'Home' }">home</RouterLink>
        </p>
    </div>
</template>
<style scoped></style>