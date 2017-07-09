const client_id = 'fooClientIdPassword'

module.exports = {
  name: 'QYBB',
  prefix: 'qybb',
  footerText: 'QYBB  © 2017',
  logo: '/logo.png',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  baseURL: 'http://localhost:8000/api/v1',
  YQL: ['http://www.zuimeitianqi.com'],
  CORS: ['http://localhost:7000'],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  client_id: client_id,
  auth: {
    username: client_id,
    password: 'secret'
  },
  api: {
    userLogin: '/user/login',
    userLogout: '/user/logout',
    userInfo: '/userInfo',
    users: '/users',
    user: '/user/:id',
    dashboard: '/dashboard',
    employee: '/employee',
  }
}
