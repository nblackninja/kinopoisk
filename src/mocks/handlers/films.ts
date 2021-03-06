import { rest } from 'msw'
import { BASE_URL } from 'api'
import { getFilms } from 'mocks/service/films'

export const filmsGet = rest.get(BASE_URL + '/films', (req, res, ctx) => {
  const type = req.url.searchParams.get('type') ?? ''
  const count = req.url.searchParams.get('count') ?? ''
  const filter = req.url.searchParams.get('filter') ?? ''
  const id = req.url.searchParams.get('id') ?? ''

  const films = getFilms({ type, count, filter, id })

  return res(
    ctx.status(200),
    ctx.delay(300),
    ctx.json({
      films,
    })
  )
})
