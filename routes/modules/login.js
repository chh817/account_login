const express = require('express')
const router = express.Router()
const User = require('../../models/user')

router.get('/', (req, res) => {
  res.render('login')
})

router.post('/', (req, res) => {
  const email = req.body.email.trim()
  const password = req.body.password.trim()
  User.findOne().and([{ email: { $regex: email, $options: '$i' } }, { password }])
    .lean()
    .then(user => {
      if (user) return res.render('welcome', { name: user.firstName })
      res.render('login', { isLoginError: true, alert: 'Incorrect username or password' })
    })
    .catch((error) => console.log(error))
})


module.exports = router