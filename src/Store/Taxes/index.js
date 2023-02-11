import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AlertError } from '@/Services/Alerts'
import TaxesManager from '@/Services/TaxesManager'

const initialState = {
  activeTaxes: [],
  inactiveTaxes: [],
  loading: false,
}

export const getTaxes = createAsyncThunk('get_taxes', async () => {
  try {
    const response = await TaxesManager.getTaxesList()

    return response
  } catch (err) {
    AlertError(err.message)
    throw err
  }
})

const slice = createSlice({
  name: 'taxes',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTaxes.pending, state => {
      state.loading = true
    }),
      builder.addCase(getTaxes.fulfilled, (state, { payload }) => {
        state.activeTaxes = payload.activeTaxes
        state.inactiveTaxes = payload.inactiveTaxes
        state.loading = false
      }),
      builder.addCase(getTaxes.rejected, state => {
        state.loading = false
      })
  },
})

const { reducer } = slice

export const {} = slice.actions

export default reducer
