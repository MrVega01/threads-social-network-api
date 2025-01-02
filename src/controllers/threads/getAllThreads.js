import {
  getAllThreadsService
} from '../../services/threads.js'

export default async function getAllThreads (req, res) {
  const response = await getAllThreadsService()
  if (!response) return res.status(500).send()

  res.json(response?.rows)
}
