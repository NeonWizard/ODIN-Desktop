import { RestHandler, RESTMethods } from 'msw'
import { baseURL } from '@/plugins/axios.js'

function createRestHandler(method) {
	return (url, resolver) => {
		const absoluteURL = new URL(baseURL).toString() + url
		return new RestHandler(method, absoluteURL, resolver)
	}
}

export const rest = {
	head: createRestHandler(RESTMethods.HEAD),
	get: createRestHandler(RESTMethods.GET),
	post: createRestHandler(RESTMethods.POST),
	delete: createRestHandler(RESTMethods.DELETE),
	put: createRestHandler(RESTMethods.PUT),
	patch: createRestHandler(RESTMethods.PATCH),
	options: createRestHandler(RESTMethods.OPTIONS),
}
