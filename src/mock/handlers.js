import { rest } from 'msw'
import { baseURL } from '@/plugins/axios.js'

export default [
  rest.get(`${baseURL}/models`, (req, res, ctx) => {
    const response = {
      models: [
        {
          name: 'swaggy-bepo'
        },
        {
          name: 'noggle'
        }
      ]
    }

    return res(ctx.status(200), ctx.json(response))
  })
]
