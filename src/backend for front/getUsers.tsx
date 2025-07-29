import type { IUser } from '../types/db/dbTypes'
import { URL_Users } from './constantsURL'

export const getUsers = (): Promise<IUser[]> =>
  fetch(URL_Users).then((loadedUsers) => loadedUsers.json())
