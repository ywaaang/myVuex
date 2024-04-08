<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <p>state:{{ this.$store.state.num }}</p>
        <p>getter:{{ this.$store.getters.getNum }}</p>
        <button @click="add">+1</button>
        <button @click="asyncAdd">+1 async</button>
    </div>
</template>

<script>
export default {
    name: "App",
    components: {},
    methods: {
        add() {
            this.$store.commit("incre", 1);
        },
        asyncAdd() {
            this.$store.dispatch("asyncIncre", 2);
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
