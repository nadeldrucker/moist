<template>
    <div id="bar">
        <span>Moist</span>
        <span class="material-icons">settings</span>
    </div>
</template>

<script>
    export default {
        name: "AppBar"
    }
</script>

<style lang="scss" scoped>
    #bar {
        background: $primary-color;
        height: 70px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
        box-shadow: black;
        @include BoxShadow(6);

        span {
            font-size: 1.5rem;
            font-weight: bold;
            color: white;
            cursor: pointer;
        }
    }
</style>