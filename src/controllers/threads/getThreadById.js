import { getThreadByIdService } from '../../services/threads.js'

export async function getThreadById (req, res) {
  const threadId = req.params.id
  if (!threadId) return res.status(400).send()

  const response = await getThreadByIdService({ id: threadId })
  if (!response) return res.status(500).send()

  res.json(response.rows[0])
}
