import type { ISession } from '../../backend for front/createSession'

export interface IUser {
  id?: string
  login: string
  password: string
  registred_at: string
  role_id: number
}

export interface IAuthUser {
  id: string
  login: string
  roleId: number
  session: ISession
}

export interface IPost {
  id: string
  title: string
  image_url: string
  content: string
  published_at: string
}

// export interface IComment {
//   id: string
//   postId: string
//   content: string
//   author: string
// }
