const Koa = require('koa')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const axios = require('axios')

const app = new Koa()
const token = process.env['ACCESS_TOKEN']

app.use(logger())
app.use(bodyParser())
app.use(async ctx => {
    console.log(ctx.header)
    console.log(ctx.request.body)
    await axios.post('https://notify-api.line.me/api/notify',
        `message=${ctx.request.body}`,
        {
            headers:
            {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${token}`
            }
        }
    ).catch(err => console.log(err))
    ctx.body = 'OK'
})

app.listen(3000)
