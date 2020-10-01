import FetchJson from "../lib/Fetch";

const API = {
    getTodos: () => FetchJson.get('/todos'),
    addTodo: (data) => FetchJson.post('/todos', data)
}

export default API;