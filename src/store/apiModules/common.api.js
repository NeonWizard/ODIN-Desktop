import { createAxiosInstance } from '@/plugins/axios'

const fetchServerStatus = async (userToken) => {
  const axios = createAxiosInstance(userToken)
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
