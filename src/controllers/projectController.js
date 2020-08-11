const express = require('express')
const authMidleware = require('../middlewares/auth')

const router = express.Router()

router.use(authMidleware)

router.get('/', (req, res) => {
  res.send({ ok: true, user: req.userId })
})

module.exports = app => app.use('/projects', router)