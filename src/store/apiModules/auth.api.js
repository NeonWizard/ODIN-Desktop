import { createAxiosInstance } from '@/plugins/axios'

const checkIsAuthenticated = async (apiToken) => {
  const axios = createAxiosInstance(apiToken)
  try {
    const response = await axios.get('/isAuthenticated')
    if (response && response.data) {
      return response.data
    }
  } catch (error) {
    if (error.response) {
      return error.response.data
    }
    console.warn(error)
  }
}

const loginUser = async (apiToken, credentials) => {
  const axios = createAxiosInstance(apiToken)
  try {
    const response = await axios.post('/auth', credentials)
    if (response && response.data) {
      return response.data
    }
  } catch (error) {
    if (error.response) {
      return error.response.data
    }
    console.warn(error)
  }
}

export {
  checkIsAuthenticated,
  loginUser
}
