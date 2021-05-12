import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 5XQI7ri7tQWSLeldOjj4taRYrJsVeh9h29oFOL-k4QM",
  },
});
