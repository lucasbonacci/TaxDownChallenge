import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import TaxItemDetailView from './TaxItemDetailView'
import { getTax, editTax } from '@/Store/Taxes'
import ImagePicker from 'react-native-image-crop-picker'

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

  const openCamera = () => {
    ImagePicker.openCamera({
      mediaType: 'photo',
      width: 400,
      height: 400,
    }).then(image => {
      setImagePath(image.path)
    })
  }

  return (
    <TaxItemDetailView
      item={item}
      loading={loading}
      editTaxAction={editTaxAction}
      openCamera={openCamera}
      imagePath={imagePath}
      setImagePath={setImagePath}
      editLoading={editLoading}
    />
  )
}

export default TaxItemDetailContainer
