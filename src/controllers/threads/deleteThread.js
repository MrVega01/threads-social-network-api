import { deleteThreadService } from '../../services/threads.js'

export default async function deleteThread (req, res) {
  const threadId = req.params?.id
  if (!threadId) return res.status(400).send()

  const response = await deleteThreadService({ id: threadId })
  if (!response) return res.status(500).send()

  res.status(204).send()
}
