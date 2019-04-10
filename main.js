const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser');
const Koa = require('koa')

const app = new Koa()
app.use(logger())
app.use(bodyParser());

app.use(bodyParser());
app.use(async ctx => {
    console.log(ctx.header)
    console.log(ctx.request.body)
    ctx.body = 'OK'
});

app.listen(3000);