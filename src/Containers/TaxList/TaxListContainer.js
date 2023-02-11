import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import TaxListView from './TaxListView'
import useDebounce from '@/Hooks/useDebounce'
import { getTaxes } from '@/Store/Taxes'

const TaxListContainer = () => {
  const dispatch = useDispatch()
  const { list, loading } = useSelector(({ taxes }) => taxes)
  const [activeTab, setActiveTab] = useState('activeTaxes')
  const statusTaxesDebounce = useDebounce(activeTab, 200)
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(getTaxes({ statusTaxesDebounce }))
  }, [statusTaxesDebounce])

  const itemsTab = [
    {
      id: 'activeTaxes',
      title: t('taxesText.labels.activeTaxes'),
      action: () => {
        setActiveTab('activeTaxes')
      },
    },
    {
      id: 'inactiveTaxes',
      title: t('taxesText.labels.inactiveTaxes'),
      action: () => {
        setActiveTab('inactiveTaxes')
      },
    },
  ]

  return (
    <TaxListView
      activeTab={activeTab}
      itemsTab={itemsTab}
      list={list}
      loading={loading}
    />
  )
}

export default TaxListContainer
