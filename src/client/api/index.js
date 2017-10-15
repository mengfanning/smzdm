import axios from 'axios'

// new axios

const fetch = axios.create({
  baseURL: '/api/',
  time: 1000,
  withcredentials: true // use axios need cookie
})

const user = {
  getUser: 'user',
  signin: 'signin',
  signup: 'signup',
  logout: 'logout'
}

export {fetch,user}


