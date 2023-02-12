import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import TaxItemDetailView from './TaxItemDetailView'
import { getTax, editTax } from '@/Store/Taxes'

const TaxItemDetailContainer = ({ route }) => {
  const dispatch = useDispatch()
  const { item, loading, editLoading } = useSelector(({ taxes }) => taxes)
  const [imagePath, setImagePath] = useState(null)
  const id = route.params.id

  useEffect(() => {
    dispatch(getTax({ id }))
  }, [])

  const editTaxAction = values => {
    let data = { ...item, ...values, image: imagePath }
    dispatch(editTax({ data, id }))
  }

  return (
    <TaxItemDetailView
      item={item}
      loading={loading}
      editTaxAction={editTaxAction}
      imagePath={imagePath}
      setImagePath={setImagePath}
      editLoading={editLoading}
    />
  )
}

export default TaxItemDetailContainer
