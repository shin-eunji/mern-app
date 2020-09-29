import FetchJson from "../lib/Fetch";

const API = {
    getTodo: () => FetchJson.get('/todo'),
}

export default API;