const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())

app.use('/users', require('./src/routes/users.js'))
app.use('/threads', require('./src/routes/threads.js'))
app.use('/posts', require('./src/routes/posts.js'))

app.listen(PORT, () => {
  console.log(`API initialized on PORT ${PORT}`)
})
