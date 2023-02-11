import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import AddTaxView from './AddTaxView'
import { addTax } from '@/Store/Taxes'

const AddTaxContainer = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector(({ taxes }) => taxes)
  const [isTaxActive, setisTaxActive] = useState('true')
  const { t } = useTranslation()

  const addTaxAction = values => {
    const tax = {
      name: values.name,
      year: values.year,
      active: isTaxActive === 'true' ? true : false,
    }

    dispatch(addTax(tax))
  }

  const itemsTab = [
    {
      id: 'true',
      title: t('taxesText.addForm.true'),
      action: () => {
        setisTaxActive('true')
      },
    },
    {
      id: 'false',
      title: t('taxesText.addForm.false'),
      action: () => {
        setisTaxActive('false')
      },
    },
  ]

  return (
    <AddTaxView
      isTaxActive={isTaxActive}
      itemsTab={itemsTab}
      loading={loading}
      addTaxAction={addTaxAction}
    />
  )
}

export default AddTaxContainer
