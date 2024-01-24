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
  },
})

export const { signInStart, signInSuccess, signInFailure } = useSlice.actions

export default useSlice.reducer
