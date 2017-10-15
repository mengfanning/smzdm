import { resolve } from 'path'
import fs from 'fs'
import Router from 'koa-router'
import getApi from '../api'
//export default function(app) {
//  const router = new Router()
  
//  router.get('*',async (ctx, next) => {
//    const template = fs.readFileSync(resolve(__dirname,'../views/index.html'),       'utf-8');
//    ctx.body = template;    
//  })
//  app.use(router.routes())
//  app.use(router.allowedMethods())
//}

const router = new Router();
getApi(router);

router.get('*',async (ctx,next) => {
  const template = fs.readFileSync(resolve(__dirname, '../views/index.html'),     'utf-8');
  ctx.body = template;
});

export default router;
