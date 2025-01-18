import { getAllUsersService } from '../../services/users.js'

export async function getAllUsers (req, res) {
  const response = await getAllUsersService()
  if (!response) return res.status(500).send()

  res.json(response.rows)
}
