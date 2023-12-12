<template>
    <section class="section-layout" style="min-height: 100vh;">
        <aside>Sidebar</aside>
        <slot />
    </section>
</template>

<style scoped>
.section-layout {
    display: grid;
    grid-template-columns: 1fr 6fr;
}
</style>