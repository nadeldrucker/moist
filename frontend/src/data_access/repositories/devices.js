import Repository from "../repository"

export default {
    // TODO remove mocks and use actual data
    getDevices() {
        return {
            devices: [
                {
                    id: "3112jhib12kjub",
                    ip: "192.168.20.100",
                    name: "Test Device 1"
                },
                {
                    id: "qwdqwewevw2131",
                    ip: "182.176.20.20",
                    name: "Test Device 2"
                }
            ]
        }
    }
}