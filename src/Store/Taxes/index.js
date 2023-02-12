import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AlertError, AlertSuccess } from '@/Services/Alerts'
import TaxesManager from '@/Services/TaxesManager'

const initialState = {
  list: [],
  item: {},
  loading: false,
  editLoading: false,
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

export const getTax = createAsyncThunk('get_tax', async ({ id }) => {
  try {
    const response = await TaxesManager.getTax(id)
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

    return response
  } catch (err) {
    AlertError(err.message)
    throw err
  }
})

export const editTax = createAsyncThunk('edit_tax', async ({ data, id }) => {
  try {
    const response = await TaxesManager.editTax(data, id)
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
      builder.addCase(getTax.pending, state => {
        state.loading = true
      }),
      builder.addCase(getTax.fulfilled, (state, { payload }) => {
        state.item = payload.item
        state.loading = false
      }),
      builder.addCase(getTax.rejected, state => {
        state.loading = false
      }),
      builder.addCase(editTax.pending, state => {
        state.editLoading = true
      }),
      builder.addCase(editTax.fulfilled, (state, { meta: { arg } }) => {
        state.item = arg.data
        state.editLoading = false
      }),
      builder.addCase(editTax.rejected, state => {
        state.editLoading = false
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
      }),
      builder.addCase(deleteTax.pending, state => {}),
      builder.addCase(deleteTax.fulfilled, (state, { meta: { arg } }) => {
        const newList = state.list.filter(item => item.id !== arg.id)
        state.list = newList
      }),
      builder.addCase(deleteTax.rejected, state => {})
  },
})

const { reducer } = slice

export const { setDeleteMode } = slice.actions

export default reducer
