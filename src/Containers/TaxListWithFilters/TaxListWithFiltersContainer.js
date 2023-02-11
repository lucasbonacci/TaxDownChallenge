import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import TaxListWithFiltersView from './TaxListWithFiltersView'
import useDebounce from '@/Hooks/useDebounce'
import { generateYear, generateAge } from '@/Helpers/generateYear'
import { getTaxes, deleteTax, setDeleteMode } from '@/Store/Taxes'

const TaxListWithFiltersContainer = () => {
  const dispatch = useDispatch()
  const { list, loading, deleteMode } = useSelector(({ taxes }) => taxes)
  const [activeTab, setActiveTab] = useState('allTaxes')
  const [activeTabSelect, setActiveTabSelect] = useState('none')
  const [selectedValueYear, setSelectedValueYear] = useState('')
  const [selectedValueAge, setSelectedValueAge] = useState('')
  const [search, setSearch] = useState('')
  const [taxesSelecteds, setTaxesSelecteds] = useState([])
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)

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

  const dispatchDeletesActions = async () => {
    setDeleteLoading(true)

    const deleteOneTax = async id => {
      return await dispatch(deleteTax({ id }))
    }

    await Promise.all(taxesSelecteds.map(deleteOneTax))
    setDeleteLoading(false)
    setShowDeleteModal(false)
    setTaxesSelecteds([])
    setDeleteMode(false)
  }

  const selectAllTaxes = () => {
    const idTaxes = list.map(tax => tax.id)
    setTaxesSelecteds(idTaxes)
  }

  const deselectAllTaxes = () => {
    setTaxesSelecteds([])
  }

  const selectTaxes = useCallback(
    id => {
      setTaxesSelecteds(prevTaxes => {
        return prevTaxes.includes(id)
          ? prevTaxes.filter(selectId => selectId !== id)
          : [...prevTaxes, id]
      })
    },
    [taxesSelecteds],
  )

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
      deleteMode={deleteMode}
      deselectAllTaxes={deselectAllTaxes}
      selectAllTaxes={selectAllTaxes}
      taxesSelecteds={taxesSelecteds}
      selectTaxes={selectTaxes}
      setShowDeleteModal={setShowDeleteModal}
      showDeleteModal={showDeleteModal}
      deleteLoading={deleteLoading}
      dispatchDeletesActions={dispatchDeletesActions}
    />
  )
}

export default TaxListWithFiltersContainer
