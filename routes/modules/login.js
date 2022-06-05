const express = require('express')
const router = express.Router()
const User = require('../../models/user')

router.get('/', (req, res) => {
  const userName = req.cookies.username
  if (userName) return res.render('welcome', { name: userName })
  res.render('login')
})

router.post('/', (req, res) => {
  const email = req.body.email.trim()
  const password = req.body.password.trim()
  User.findOne().and([{ email: { $regex: email, $options: '$i' }, password }])
    .lean()
    .then(user => {
      if (user) {
        res.cookie('username', user.firstName)
        return res.redirect('/')
      }
      res.render('login', { isLoginError: true, alert: 'Incorrect username or password' })
    })
    .catch((error) => console.log(error))
})

router.get('/logout', (req, res) => {
  res.clearCookie('username')
  return res.redirect('/')
})


module.exports = router
