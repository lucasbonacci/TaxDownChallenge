import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import TaxListWithFiltersView from './TaxListWithFiltersView'
import useDebounce from '@/Hooks/useDebounce'
import { generateYear, generateAge } from '@/Helpers/generateYear'
import { getTaxes } from '@/Store/Taxes'

const TaxListWithFiltersContainer = () => {
  const dispatch = useDispatch()
  const { list, loading } = useSelector(({ taxes }) => taxes)
  const [activeTab, setActiveTab] = useState('allTaxes')
  const [activeTabSelect, setActiveTabSelect] = useState('none')
  const [selectedValueYear, setSelectedValueYear] = useState('')
  const [selectedValueAge, setSelectedValueAge] = useState('')
  const [search, setSearch] = useState('')

  const searchDebounce = useDebounce(search, 500)
  const selectedYearDebounce = useDebounce(selectedValueYear, 500)
  const selectedAgeDebounce = useDebounce(selectedValueAge, 500)
  const statusTaxesDebounce = useDebounce(activeTab, 500)

  const { t } = useTranslation()

  const yearOptions = generateYear()
  const ageOptions = generateAge()

  useEffect(() => {
    dispatch(
      getTaxes({
        searchDebounce,
        statusTaxesDebounce,
        selectedAgeDebounce,
        selectedYearDebounce,
      }),
    )
  }, [
    searchDebounce,
    statusTaxesDebounce,
    selectedAgeDebounce,
    selectedYearDebounce,
  ])

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
    {
      id: 'allTaxes',
      title: t('taxesText.labels.allTaxes'),
      action: () => {
        setActiveTab('allTaxes')
      },
    },
  ]

  const itemsTabSelects = [
    {
      id: 'age',
      title: t('taxesText.labels.byAge'),
      action: () => {
        setSelectedValueYear('')
        setActiveTabSelect('age')
      },
    },
    {
      id: 'year',
      title: t('taxesText.labels.byYear'),
      action: () => {
        setSelectedValueAge('')
        setActiveTabSelect('year')
      },
    },
    {
      id: 'none',
      title: t('taxesText.labels.none'),
      action: () => {
        setSelectedValueYear('')
        setSelectedValueAge('')
        setActiveTabSelect('none')
      },
    },
  ]

  return (
    <TaxListWithFiltersView
      activeTab={activeTab}
      itemsTab={itemsTab}
      itemsTabSelects={itemsTabSelects}
      activeTabSelect={activeTabSelect}
      list={list}
      loading={loading}
      selectedValueYear={selectedValueYear}
      setSelectedValueYear={setSelectedValueYear}
      selectedValueAge={selectedValueAge}
      setSelectedValueAge={setSelectedValueAge}
      yearOptions={yearOptions}
      ageOptions={ageOptions}
      setSearch={setSearch}
      search={setSearch}
    />
  )
}

export default TaxListWithFiltersContainer
