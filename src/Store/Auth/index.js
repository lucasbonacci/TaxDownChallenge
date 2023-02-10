import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { navigate, navigateAndSimpleReset } from '@/Navigators/utils'
import { AlertError } from '@/Services/Alerts'
import { store } from '@/Store'
import auth from '@react-native-firebase/auth'

const initialState = {
  loading: false,
}

export const emailLogin = createAsyncThunk(
  'sign_in',
  async ({ email, password }) => {
    try {
      const response = await auth().signInWithEmailAndPassword(email, password)
      return response
    } catch (err) {
      AlertError(err.message)
      throw err
    }
  },
)

export const logout = createAsyncThunk('sign_out', async () => {
  try {
    const response = await auth().signOut()
    return response
  } catch (err) {
    AlertError(err.message)
    throw err
  }
})

// authentication handling
export const VerifyAuthState = createAsyncThunk(
  'state_auth',
  async (user, { dispatch }) => {
    try {
      if (user) {
        navigate('Main', {
          screen: 'Dashboard',
        })
      } else {
        navigateAndSimpleReset('Login')
      }
    } catch (err) {
      AlertError(err.message)
      throw err
    }
  },
)

export const createAccount = createAsyncThunk(
  'create_account',
  async ({ email, password }) => {
    try {
      const response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      )

      return response
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
