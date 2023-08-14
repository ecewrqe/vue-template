<template>

    <h1>InjCompoC</h1>
    <div>{{ username }}</div>

</template>

<script>
var a =10;
    console.log(a);
    export default {
        name: "InjCompoC",
        inject: [
            'username'
        ]
    }
</script>

<style lang="scss" scoped>

</style>