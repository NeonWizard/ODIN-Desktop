import { createAxiosInstance } from '@/plugins/axios'

const fetchServerStatus = async (apiToken) => {
  const axios = createAxiosInstance(apiToken)
  try {
    const response = await axios.get('/ping')
    if (response && response.data) {
      return {
        online: true,
      }
    }
  } catch (error) {
    console.warn(error)
    return {
      online: false
    }
  }
}

export {
  fetchServerStatus
}
