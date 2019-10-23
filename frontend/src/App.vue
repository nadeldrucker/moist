<template>
    <div id="app">
        <AppBar></AppBar>
        <div id="router-wrapper">
            <router-view></router-view>
        </div>
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
        width: 100vw;
        height: 100vh;
        font-family: "Open Sans", sans-serif;
        font-size: 1em;

        #router-wrapper {
            padding: 1rem 1rem 0;
            width: 100%;
            height: 100%;
        }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *::before, *::after {
        box-sizing: border-box;
    }
</style>
