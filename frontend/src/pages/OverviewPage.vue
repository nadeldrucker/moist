<template>
    <div id="overview">
        <ul>
            <li v-for="device in devices">
                {{device.id}}
            </li>
        </ul>
    </div>
</template>

<script>
    import {DAO} from "../data_access/dao"

    export default {
        name: "OverviewPage",
        data() {
            return {
                devices: []
            }
        },
        created() {
            this.fetchData();
        },
        methods: {
            async fetchData(){
                const { data } = await DAO.devices.getDevices();
                this.devices = data;
            }
        }
    }
</script>

<style scoped lang="scss">
    #overview {
        li {
            list-style: none;
            display: flex;
            flex-direction: row;
        }
    }
</style>