<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import OverviewPage from './pages/OverviewPage'

    export default {
        name: 'app',
        components: {
            OverviewPage
        }
    }
</script>

<style lang="scss">
    @import "static/sanitize.css";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
