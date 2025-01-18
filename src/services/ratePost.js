import { turso } from './initDatabase.js'

export async function createRatePostService ({ ratePostCol, idPost, createdAt, stars, idUser }) {
  const response = await turso.execute({
    sql: `
      INSERT INTO rate_post (rate_postcol, idPost, created_at, stars, idUser)
      VALUES (?, ?, ?, ?, ?)
      RETURNING *;
    `,
    args: [ratePostCol, idPost, createdAt, stars, idUser]
  }).catch((e) => {
    console.error('ERROR ON CREATE RATE_POST SQL', e)
  })
  return response
}

export async function deleteRatePostService ({ id }) {
  const response = await turso.execute({
    sql: `
      DELETE FROM rate_post WHERE id = ?;
    `,
    args: [id]
  }).catch((e) => {
    console.error('ERROR ON DELETE RATE_POST SQL', e)
  })
  return response
}
