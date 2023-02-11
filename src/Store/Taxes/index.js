import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AlertError, AlertSuccess } from '@/Services/Alerts'
import TaxesManager from '@/Services/TaxesManager'

const initialState = {
  activeTaxesList: [],
  inactiveTaxesList: [],
  loading: false,
}

export const getTaxes = createAsyncThunk('get_taxes', async data => {
  try {
    const response = await TaxesManager.getTaxesList(data)

    return response
  } catch (err) {
    AlertError(err.message)
    throw err
  }
})

export const addTax = createAsyncThunk('add_tax', async data => {
  try {
    const response = await TaxesManager.addTax(data)
    AlertSuccess('Your tax was added')
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
        state.list = payload.list
        state.loading = false
      }),
      builder.addCase(getTaxes.rejected, state => {
        state.loading = false
      }),
      builder.addCase(addTax.pending, state => {
        state.loading = true
      }),
      builder.addCase(addTax.fulfilled, (state, { payload }) => {
        const newTax = {
          name: payload.name,
          year: payload.year,
          id: payload.id,
          active: payload.active,
        }
        if (payload.active) {
          state.activeTaxesList = [...state.activeTaxesList, newTax]
        } else {
          state.inactiveTaxesList = [...state.inactiveTaxesList, newTax]
        }
        state.loading = false
      }),
      builder.addCase(addTax.rejected, state => {
        state.loading = false
      })
  },
})

const { reducer } = slice

export const {} = slice.actions

export default reducer
