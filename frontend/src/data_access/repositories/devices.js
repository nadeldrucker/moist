import Repository from "../repository"

const RESOURCE = "/devices";

export default {
    getDevices() {
        return Repository.get(`${RESOURCE}`);
    },
    getDevice(deviceId) {
        return Repository.get(`${RESOURCE}/${deviceId}`);
    }
}