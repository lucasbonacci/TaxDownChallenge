import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import { AlertError } from '@/Services/Alerts'
import AuthManager from '@/Services/AuthManager/index'

const initialState = {
  loading: false,
}

export const emailLogin = createAsyncThunk(
  'sign_in',
  async ({ email, password }) => {
    try {
      await AuthManager.signInWithEmailAndPassword(email, password)
    } catch (err) {
      AlertError(err.message)
      throw err
    }
  },
)

export const logout = createAsyncThunk('sign_out', async () => {
  try {
    await AuthManager.signOut()
  } catch (err) {
    AlertError(err.message)
    throw err
  }
})

// authentication handling
export const VerifyAuthState = createAsyncThunk('state_auth', async user => {
  try {
    if (user) {
      navigateAndSimpleReset('Main', {
        screen: 'Dashboard',
      })
    } else {
      navigateAndSimpleReset('Login')
    }
  } catch (err) {
    AlertError(err.message)
    throw err
  }
})

export const createAccount = createAsyncThunk(
  'create_account',
  async ({ email, password }) => {
    try {
      await AuthManager.createUserWithEmailAndPassword(email, password)
    } catch (err) {
      AlertError(err.message)
      throw err
    }
  },
)

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(emailLogin.pending, state => {
      state.loading = true
    }),
      builder.addCase(emailLogin.fulfilled, state => {
        state.loading = false
      }),
      builder.addCase(emailLogin.rejected, state => {
        state.loading = false
      }),
      builder.addCase(logout.pending, state => {
        state.loading = true
      }),
      builder.addCase(logout.fulfilled, state => {
        state.loading = false
      }),
      builder.addCase(logout.rejected, state => {
        state.loading = false
      }),
      builder.addCase(createAccount.pending, state => {
        state.loading = true
      }),
      builder.addCase(createAccount.fulfilled, state => {
        state.loading = false
      }),
      builder.addCase(createAccount.rejected, state => {
        state.loading = false
      })
  },
})

const { reducer } = slice

export const {} = slice.actions

export default reducer
