import axios from "axios";

const searchFilmInstance = axios.create({
  baseURL: "https://search.imdbot.workers.dev",
});

export default searchFilmInstance;
