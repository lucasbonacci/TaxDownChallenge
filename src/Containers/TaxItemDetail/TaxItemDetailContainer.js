import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import TaxItemDetailView from './TaxItemDetailView'
import { addSubmission } from '@/Store/Taxes'
import { getForm } from '@/Store/Forms'

const TaxItemDetailContainer = ({ route }) => {
  const dispatch = useDispatch()
  const { addSubmissionLoading } = useSelector(({ taxes }) => taxes)
  const { form, loading: loadingForm } = useSelector(({ forms }) => forms)

  const [imagePath, setImagePath] = useState(null)
  const item = route?.params?.item

  useEffect(() => {
    dispatch(getForm('form'))
  }, [])

  const addSubmissionAction = values => {
    let data = { age: values.age, name: values.name, surname: values.surname }

    if (imagePath) {
      data = { ...data, image: imagePath }
    }

    dispatch(addSubmission({ data, id: item.id }))
  }

  return (
    <TaxItemDetailView
      item={item}
      addSubmissionAction={addSubmissionAction}
      imagePath={imagePath}
      setImagePath={setImagePath}
      addSubmissionLoading={addSubmissionLoading}
      form={form}
      loadingForm={loadingForm}
    />
  )
}

export default TaxItemDetailContainer
