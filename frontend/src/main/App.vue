<template>
    <div id="app">
        <AppBar></AppBar>
        <router-view></router-view>
    </div>
</template>

<script>
    import OverviewPage from './pages/OverviewPage'
    import AppBar from "./components/layout/AppBar";

    export default {
        name: 'app',
        components: {
            OverviewPage,
            AppBar
        }
    }
</script>

<style lang="scss">
    #app {
        width: 100%;
        height: 100%;
        font-family: "Open Sans", sans-serif;
    }
</style>
