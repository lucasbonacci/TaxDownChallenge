import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import StepOneView from './StepOneView'

import { getTaxes } from '@/Store/Taxes'

const StepOneContainer = () => {
  const dispatch = useDispatch()
  const { inactiveTaxes, activeTaxes } = useSelector(({ taxes }) => taxes)
  const [activeTab, setActiveTab] = useState('ActiveTaxes')
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(getTaxes('taxes'))
  }, [])

  const itemsTab = [
    {
      id: 'activeTaxes',
      title: t('stepOneScreen.labels.activeTaxes'),
      action: () => {
        setActiveTab('activeTaxes')
      },
    },
    {
      id: 'inactiveTaxes',
      title: t('stepOneScreen.labels.inactiveTaxes'),
      action: () => {
        setActiveTab('inactiveTaxes')
      },
    },
  ]

  return (
    <StepOneView
      activeTab={activeTab}
      itemsTab={itemsTab}
      inactiveTaxes={inactiveTaxes}
      activeTaxes={activeTaxes}
    />
  )
}

export default StepOneContainer
