import { deleteUserService } from '../../services/users.js'

export async function deleteUser (req, res) {
  const userId = req.params.id
  if (!userId) return res.status(400).send()

  const response = await deleteUserService({ id: userId })
  if (!response) return res.status(500).send()

  res.status(204).send()
}
