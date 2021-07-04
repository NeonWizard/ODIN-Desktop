import { rest } from '@/plugins/msw'

export default [
  rest.get('/ping', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}))
  }),

  rest.get('/isAuthenticated', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}))
  }),

  rest.post('/auth', (req, res, ctx) => {
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
          name: 'test'
        },
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

  rest.post('/models/:modelName', (req, res, ctx) => {
    const { modelName } = req.params

    const response = {
      data: `hi, i'm ${modelName}!\nthere are 40 cherries on the cherry tree.`,
      meta: {
        generation_time: 69,
        parameters: {
          batch_size: 1,
          include_prefix: true,
          length: 32,
          n_samples: 1,
          prefix: null,
          seed: null,
          temperature: 0.7,
          top_k: 0,
          top_p: 0.0,
          truncate: null
        }
      }
    }

    return res(ctx.status(200), ctx.json(response))
  })
]
