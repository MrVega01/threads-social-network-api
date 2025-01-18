import express from 'express'
import { getAllPosts } from './../controllers/posts/getAllPosts.js'
import { getPostById } from './../controllers/posts/getPostById.js'
import { createPost } from './../controllers/posts/createPost.js'
import { updatePost } from './../controllers/posts/updatePost.js'
import { deletePost } from './../controllers/posts/deletePost.js'

const router = express.Router()

router.get('/', getAllPosts)
router.get('/:id', getPostById)
router.post('/', createPost)
router.put('/', updatePost)
router.delete('/:id', deletePost)

export default router
