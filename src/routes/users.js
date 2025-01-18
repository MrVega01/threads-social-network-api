import express from 'express'
import { getAllUsers } from './../controllers/users/getAllUsers.js'
import { getUserById } from './../controllers/users/getUserById.js'
import { createUser } from './../controllers/users/createUser.js'
import { updateUser } from './../controllers/users/updateUser.js'
import { deleteUser } from './../controllers/users/deleteUser.js'

const router = express.Router()

router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.post('', createUser)
router.put('', updateUser)
router.delete('/:id', deleteUser)

export default router
