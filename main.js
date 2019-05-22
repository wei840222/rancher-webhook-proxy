const Koa = require('koa')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const axios = require('axios')

const app = new Koa()
const token = process.env['LINE_NOTIFY_ACCESS_TOKEN']

app.use(logger())
app.use(bodyParser())
app.use(async ctx => {
    console.log(ctx.header)
    console.log(ctx.request.query)
    console.log(ctx.request.body)
    console.log()
    ctx.request.body.forEach(element => {
        ctx.request.query['token'].split(',').forEach(async token => {
            await axios.post('https://notify-api.line.me/api/notify',
                `message=${element.labels.test_msg}`,
                {
                    headers:
                        {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Authorization': `Bearer ${token}`
                        }
                }
            ).catch(err => console.log(err))
        })
    })
    ctx.body = 'OK'
})

app.listen(3000)
