import { resolve } from 'path'
import Koa from 'koa'
import session from 'koa-session'
import bodyparser from 'koa-bodyparser'
import mongoose from 'mongoose'
import serve from 'koa-static'
import router from './routes/index'

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/smzdm',{
  useMongoClient: true
})
//error
mongoose.connection.on('error',console.error.bind(console,'connect mongodb failed'))

const app = new Koa()
app.key = ['secretkeyyy']

app.use(serve(resolve(__dirname , '../static')))

app.use(session({
  key: 'smzdm:sess',
  maxAge: 864000000,
  overwrite: true,
  signed: true,
  rolling: false
},app))

app.use(bodyparser())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)
console.log('connect at port 3000')
