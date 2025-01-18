import express from 'express'
import { getAllComments } from './../controllers/comments/getAllComments.js'
import { getCommentById } from './../controllers/comments/getCommentById.js'
import { createComment } from './../controllers/comments/createComment.js'
import { updateComment } from './../controllers/comments/updateComment.js'
import { deleteComment } from './../controllers/comments/deleteComment.js'

const router = express.Router()

router.get('/', getAllComments)
router.get('/:id', getCommentById)
router.post('/', createComment)
router.put('/', updateComment)
router.delete('/:id', deleteComment)

export default router
