import axios from "axios";

export const baseURL = 'https://odin.deadtired.me/api'

export const createAxiosInstance = token => axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': token
  }
})
