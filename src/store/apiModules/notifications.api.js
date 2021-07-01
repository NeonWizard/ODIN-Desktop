import { createAxiosInstance } from '@/plugins/axios'

const fetchPendingNotifications = async (userToken, credentials) => {
  const axios = createAxiosInstance(userToken)
  try {
    const response = await axios.post('/notifications/pending', credentials)
    if (response && response.data) {
      return response.data
    }
  } catch (error) {
    console.warn(error)
  }
}

export {
	fetchPendingNotifications
}
