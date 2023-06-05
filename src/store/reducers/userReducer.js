import { createSlice } from '@reduxjs/toolkit'
import authStatus from '../../models/authStatus'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    status: authStatus.unauthorized,
    token: null,
    user: {},
  },
  reducers: {
    logIn: (state, action) => ({
      ...state,
      /* token: action.payload.token, */
      user: action.payload,
      status: authStatus.authorized,
    }),
    logOut: (state) => ({
      ...state,
      status: authStatus.unauthorized,
      user: {},
    }),
    check: (state, action) => ({
      ...state,
      status: action.payload.status,
    }),
  },
})
export default userSlice.reducer
export const { logIn, logOut, check } = userSlice.actions
