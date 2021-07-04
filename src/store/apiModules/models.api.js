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

const generate = async (userToken, modelName, body) => {
  const axios = createAxiosInstance(userToken)
  try {
    const response = await axios.post(`/models/${modelName}`, body)
    if (response && response.data) {
      return response.data
    }
  } catch (error) {
    console.warn(error)
  }
}

export {
  fetchModels,
  generate
}
