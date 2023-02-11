import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AlertError, AlertSuccess } from '@/Services/Alerts'
import TaxesManager from '@/Services/TaxesManager'

const initialState = {
  list: [],
  loading: false,
  deleteMode: false,
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

export const deleteTax = createAsyncThunk('delete_tax', async ({ id }) => {
  try {
    const response = await TaxesManager.deleteTax(id)
    AlertSuccess('tax was deleted')
    return response
  } catch (err) {
    AlertError(err.message)
    throw err
  }
})

const slice = createSlice({
  name: 'taxes',
  initialState,
  reducers: {
    setDeleteMode: (state, { payload }) => {
      state.deleteMode = payload
    },
  },
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
        state.loading = false
      }),
      builder.addCase(addTax.rejected, state => {
        state.loading = false
      })
  },
})

const { reducer } = slice

export const { setDeleteMode } = slice.actions

export default reducer
