import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import { AlertError } from '@/Services/Alerts'
import FormsManager from '@/Services/FormsManager/index'

const initialState = {
  form: [],
  loading: false,
}

export const getForm = createAsyncThunk('get_form', async path => {
  try {
    const response = FormsManager.getForm(path)
    return response
  } catch (err) {
    AlertError(err.message)
    throw err
  }
})

const slice = createSlice({
  name: 'forms',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getForm.pending, state => {
      state.loading = true
    }),
      builder.addCase(getForm.fulfilled, (state, { payload }) => {
        state.form = payload.form
        state.loading = false
      }),
      builder.addCase(getForm.rejected, state => {
        state.loading = false
      })
  },
})

const { reducer } = slice

export const {} = slice.actions

export default reducer
