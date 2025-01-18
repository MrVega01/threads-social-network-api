import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import usersRoute from './src/routes/users.js'
import threadsRoute from './src/routes/threads.js'
import postsRoute from './src/routes/posts.js'
import commentsRoute from './src/routes/comments.js'
import ratePostRoute from './src/routes/ratePost.js'

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())

app.use('/users', usersRoute)
app.use('/threads', threadsRoute)
app.use('/posts', postsRoute)
app.use('/ratePost', ratePostRoute)
app.use('/comments', commentsRoute)

app.listen(PORT, () => {
  console.log(`API initialized on PORT ${PORT}`)
})
