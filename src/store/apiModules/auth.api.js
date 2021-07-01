import { createAxiosInstance } from '@/plugins/axios'

const checkIsAuthenticated = async (userToken) => {
  const axios = createAxiosInstance(userToken)
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

const loginUser = async (userToken, credentials) => {
  const axios = createAxiosInstance(userToken)
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
