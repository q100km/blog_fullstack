import type { IUser } from '../types/db/dbTypes'

export const sessions = {
  list: {},

  create(user: IUser) {
    //
    const hash: string = Math.random().toFixed(50)

    this.list[hash] = user

    return hash
  },

  remove(hash: string) {
    delete this.list[hash]
  },
}
