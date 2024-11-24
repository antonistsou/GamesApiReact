import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: '438194bfcb514d0491c2c4b56da61eca'
    }
})