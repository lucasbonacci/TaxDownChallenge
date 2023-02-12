import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import TaxItemDetailView from './TaxItemDetailView'
import { getTax, editTax } from '@/Store/Taxes'

const TaxItemDetailContainer = ({ route }) => {
  const dispatch = useDispatch()
  const { item, loading } = useSelector(({ taxes }) => taxes)
  const id = route.params.id

  useEffect(() => {
    dispatch(getTax({ id }))
  }, [])

  const editTaxAction = values => {
    let data = { ...item, ...values }

    dispatch(editTax({ data, id }))
  }

  return (
    <TaxItemDetailView
      item={item}
      loading={loading}
      editTaxAction={editTaxAction}
    />
  )
}

export default TaxItemDetailContainer
