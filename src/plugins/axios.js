import axios from "axios";

let baseURL = `https://odin.deadtired.me/api`;
let apiKey = process.env.VUE_APP_APIKEY;

const instance = axios.create({
  baseURL: baseURL,
  timeout: 30000,
  headers: {
    "Authorization": `Bearer: ${apiKey}`,
  },
});

export default instance;