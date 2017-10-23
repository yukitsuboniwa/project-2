const User = require('../models/user')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('users/register')
})

router.post('/', (req, res) => {
  var formData = req.body
  var newUser = new User({
    name: formData.name,
    email: formData.email,
    password: formData.password
  })

  newUser.save()
  .then(
    user => res.redirect(`/profile/${user.slug}`),    
    err => res.send(err)
  )
})

module.exports = router