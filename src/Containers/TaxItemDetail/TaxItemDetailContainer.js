import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import TaxItemDetailView from './TaxItemDetailView'
import { getTax, editTax } from '@/Store/Taxes'
import { getForm } from '@/Store/Forms'

const TaxItemDetailContainer = ({ route }) => {
  const dispatch = useDispatch()
  const { item, loading, editLoading } = useSelector(({ taxes }) => taxes)
  const { form, loading: loadingForm } = useSelector(({ forms }) => forms)

  const [imagePath, setImagePath] = useState(null)
  const id = route.params.id

  useEffect(() => {
    dispatch(getTax({ id }))
    dispatch(getForm('form'))
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
      form={form}
      loadingForm={loadingForm}
    />
  )
}

export default TaxItemDetailContainer
