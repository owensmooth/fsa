const Koa = require('koa')
const KoaRouter = require('koa-router')
const render = require('koa-ejs')
const mount = require('koa-mount')
const serve = require('koa-static')

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
  await ctx.render('layout')
})

app.use(router.routes())
// app.use(notfound)

app.listen(3000)
