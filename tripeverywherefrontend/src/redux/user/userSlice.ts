import { UserState } from '@/@types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: UserState = {
  currentUser: null,
  error: null,
  loading: false,
}

const useSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true
    },
    signInSuccess: (state, action: PayloadAction<null>) => {
      state.currentUser = action.payload
      state.loading = false
      state.error = null
    },
    signInFailure: (state, action: PayloadAction<null>) => {
      state.error = action.payload
      state.loading = false
    },
    updateUserStart: (state) => {
      state.loading = true
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload
      state.loading = false
    },
    updateUserFailure: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    deleteUserStart: (state) => {
      state.loading = true
    },
    deleteUserSuccess: (state) => {
      state.currentUser = null
      state.loading = false
      state.error = null
    },
    deleteUserFailure: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    signOutUserStart: (state) => {
      state.loading = true
    },
    signOutUserSuccess: (state) => {
      state.currentUser = null
      state.loading = false
      state.error = null
    },
    signOutUserFailure: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
  },
})

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserFailure,
  deleteUserSuccess,
  deleteUserStart,
  signOutUserFailure,
  signOutUserSuccess,
  signOutUserStart,
} = useSlice.actions

export default useSlice.reducer
