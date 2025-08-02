import { actions } from '../actionts'

interface IAppState {
  wasLogout: boolean
}

const initialAppState: IAppState = {
  wasLogout: false,
}

export const appReducer = (state = initialAppState, action) => {
  const { type, payload } = action

  if (type === actions.LOGOUT) {
    return {
      ...state,
      wasLogout: !state.wasLogout,
    }
  }
  //
  if (type === 321) {
    //
  }
  return state
}
