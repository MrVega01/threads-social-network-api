const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: 'postslist' })
})

module.exports = router
