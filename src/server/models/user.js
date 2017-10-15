import mongoose from 'mongoose'
import moment from 'moment'
import { md5 } from '../utils'

moment.locale('zh-cn')
 
// created user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true 
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  toJSON: {
    virtuals: true
  }
})

//use moment(plugin) init date
userSchema.virtual('prettyCreatedAt').get(function() {
  return moment(this.createdAt).format('ll');
})
// users add
userSchema.statics.add = async function(ctx,user) {
  let document = await this.findOne({email: user.email});
  if(document) {
    return { ok: false,msg:'ci you xiang yi zu ce'}
  };
  let document_2 = await this.findOne({username: user.username});
  if(document_2){
    return {ok: false,msg: 'ci yong hu ming yi zu ce'}
  };
  
  user.password = md5(user.paddword);
  await user.save();
  if(ctx) {
     user.password = null;
     ctx.session.user = user;
     return {ok: true, msg: 'zu ce is ok',user}
  }
}

// user  login
userSchema.static.login = async function(ctx,email,password) {
  let user = await this.findOne({email});
  if (user) {
    if(password === user.password){
      return { ok: true, user};
    }else {
      return { ok: false, msg: 'mi ma cuo wu'}
    }  
  }else {
    return { ok: false, msg: 'ci you xiang wei zhu ce'}
  }
}

let User = mongoose.model('User', userSchema);
// add admin

User.findOne({isAdmin: true}).then(user => {
  if (user) {
    return false;
  }
  const admin = new User({
    username: 'admin',
    email: 'admin@shiyanlou.com',
    password: md5('admin'),
    isAdmin: true
  })
  admin.save()
})

export { User }
