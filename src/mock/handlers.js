import { rest } from '@/plugins/msw'

export default [
  rest.get('/ping', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}))
  }),

  rest.get('/isAuthenticated', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}))
  }),

  rest.get('/auth', (req, res, ctx) => {
    const response = {
      token: 'swaggybepo'
    }

    return res(ctx.status(200), ctx.json(response))
  }),

  // -----

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
]
