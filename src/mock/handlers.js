import { rest } from '@/plugins/msw'

export default [
  rest.get('/models', (req, res, ctx) => {
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
  }),

  rest.get('/isAuthenticated', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}))
  })
]
