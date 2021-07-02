import { createAxiosInstance } from '@/plugins/axios'

const fetchModels = async (userToken) => {
  const axios = createAxiosInstance(userToken)
  try {
    const response = await axios.get('/models')
    if (response && response.data) {
      return response.data
    }
  } catch (error) {
    console.warn(error)
  }
}

export {
  fetchModels
}
