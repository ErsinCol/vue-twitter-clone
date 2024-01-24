<script setup>
</script>

<template>
    <div class="py-0.5">
        <RouterLink :to="{ name: 'Home' }" class="text-[color:var(--color-base)] w-[3.25rem] h-[3.25rem] rounded-full flex items-center justify-center hover:bg-[color:var(--background-secondary)] transition-colors">
            <BaseIcon name="logo" class="w-[1.875rem] h-[1.875rem]"/>
        </RouterLink>
    </div>
</template>

<style scoped></style>