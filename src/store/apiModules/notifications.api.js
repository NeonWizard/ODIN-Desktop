import { createAxiosInstance } from '@/plugins/axios'

const fetchPendingNotifications = async (apiToken, credentials) => {
  const axios = createAxiosInstance(apiToken)
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
