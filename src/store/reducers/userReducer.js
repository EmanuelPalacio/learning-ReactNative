import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    status: 'unauthorized',
    token: null,
    errorMessage: null,
    user: {},
  },
  reducers: {
    logIn: (state, action) => ({
      ...state,
      token: action.payload.token,
      user: action.payload.user,
    }),
    logOut: (state) => ({
      ...state,
      status: 'unauthorized',
      user: {},
    }),
    authorized: (state) => ({
      ...state,
      status: 'authorized',
    }),
  },
})
export default userSlice.reducer
export const { logIn, logOut, authorized } = userSlice.actions
