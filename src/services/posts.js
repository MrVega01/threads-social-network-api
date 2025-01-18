import { turso } from './initDatabase.js'

export async function getAllPostsService () {
  const response = await turso.execute({
    sql: `
      SELECT * FROM posts;
    `,
    args: []
  }).catch((e) => {
    console.error('ERROR ON GET ALL POSTS SQL', e)
  })
  return response
}

export async function getPostByIdService ({ id }) {
  const response = await turso.execute({
    sql: `
      SELECT * FROM posts WHERE id = ?;
    `,
    args: [id]
  }).catch((e) => {
    console.error('ERROR ON GET POST BY ID SQL', e)
  })
  return response
}

export async function createPostService ({ idUser, idThread, createdAt, text, idPostShared }) {
  const response = await turso.execute({
    sql: `
      INSERT INTO posts (idUser, idThread, created_at, text, id_postshared)
      VALUES (?, ?, ?, ?, ?)
      RETURNING *;
    `,
    args: [idUser, idThread, createdAt, text, idPostShared]
  }).catch((e) => {
    console.error('ERROR ON CREATE POST SQL', e)
  })
  return response
}

export async function updatePostService ({ id, idUser, idThread, createdAt, text, idPostShared }) {
  const response = await turso.execute({
    sql: `
      UPDATE posts
      SET idUser = ?, idThread = ?, created_at = ?, text = ?, id_postshared = ?
      WHERE id = ?;
    `,
    args: [idUser, idThread, createdAt, text, idPostShared, id]
  }).catch((e) => {
    console.error('ERROR ON UPDATE POST SQL', e)
  })
  return response
}

export async function deletePostService ({ id }) {
  const response = await turso.execute({
    sql: `
      DELETE FROM posts WHERE id = ?;
    `,
    args: [id]
  }).catch((e) => {
    console.error('ERROR ON DELETE POST SQL', e)
  })
  return response
}
