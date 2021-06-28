import axios from "axios";

let baseURL = `https://odin.deadtired.me/api`;

export const createAxiosInstance = token => axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer: ${token}`
  }
})
