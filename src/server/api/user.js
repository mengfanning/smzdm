import { User } from '../models'

export default function(router){
  // signin
  router.post('/api/signin', async (ctx, next) => {
    let {email,password} = ctx.request.body;
    ctx.body = await User.login(ctx, email, password);
  });
  
  //signup
  router.post('/api/signup', async (ctx, next) => {
    let {username,email,password,repassword} = ctx.request.body;
    if(password !== repassword){
      ctx.boby = {ok: false,msg: 'liang ci mi ma bu yizhi'};
    }else {
      let user = new User({
        username,
        email,
        password
      });
      ctx.body = await User.add(ctx,user);
    }
  })

  //get online user
  router.get('/api/user', async (ctx,next) => {
    if(ctx.session.user){
      ctx.body = {ok: true,msg:'yi deng lu'}
    }else{
      ctx.body = {ok: false,msg: 'wei deng lu'}
    }
  })

  //signout
  router.get('/api/logout',(ctx,next) => {
    delete ctx.session.user;
    ctx.body = {ok: true, msg:'exit is ok'}
  })
}
