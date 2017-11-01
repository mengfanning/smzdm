import { User } from '../models'

export default function(router){
  // 登录
  router.post('/api/signin', async (ctx, next) => {
    let {email,password} = ctx.request.body;
    ctx.body = await User.login(ctx, email, password);
  });

  //注册
  router.post('/api/signup', async (ctx, next) => {
    let {username,email,password,repassword} = ctx.request.body;
    if(password !== repassword){
      ctx.boby = {ok: false,msg: '两次密码'};
    }else {
      let user = new User({
        username,
        email,
        password
      });
      ctx.body = await User.add(ctx,user);
    }
  })

  //在线用户
  router.get('/api/user', async (ctx,next) => {
    if(ctx.session.user){
      ctx.body = {ok: true,msg:'已登录'}
    }else{
      ctx.body = {ok: false,msg: '未登录'}
    }
  })

  //推出登录
  router.get('/api/logout',(ctx,next) => {
    delete ctx.session.user;
    ctx.body = {ok: true, msg:'推出成功'}
  })
}
