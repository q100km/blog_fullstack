import type { RootState } from './store'

export const selectUserRole = ({ user }: RootState) => user.roleId
export const selectUserLogin = ({ user }: RootState) => user.login
export const selectUserSession = ({ user }: RootState) => user.session
// export const selectAppLogout = ({ })
