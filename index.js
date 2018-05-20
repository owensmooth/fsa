const Koa = require('koa')
const KoaRouter = require('koa-router')
const render = require('koa-ejs')
const mount = require('koa-mount')
const serve = require('koa-static')
const axios = require('axios')

const app = new Koa()
const router = KoaRouter()

const notfound = require('./middleware/notfound')

app.use(mount('/assets', serve('assets')))

render(app, {
  root: 'templates',
  layout: 'layout',
  viewExt: 'ejs'
})


router.get('/', async (ctx, next) => {
  const apiResponse = await axios.get('http://api.ratings.food.gov.uk/Authorities', {
    headers: {
      'x-api-version': 2
    }
  })

  const data = {
    poo: 'PISS',
    owen: 'smeg',
    authorities: apiResponse.data.authorities
  }

  await ctx.render('layout', data)
})

app.use(router.routes())
// app.use(notfound)

app.listen(3000)
