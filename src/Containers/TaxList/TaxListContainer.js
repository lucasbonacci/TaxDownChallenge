import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import TaxListView from './TaxListView'
import useDebounce from '@/Hooks/useDebounce'
import { generateYear } from '@/Helpers/generateYear'
import { getTaxes, deleteTax, setDeleteMode } from '@/Store/Taxes'
import database from '@react-native-firebase/database'

const TaxListContainer = () => {
  const dispatch = useDispatch()
  const { list, loading, deleteMode } = useSelector(({ taxes }) => taxes)
  const [activeTab, setActiveTab] = useState('allTaxes')
  const [activeTabSelect, setActiveTabSelect] = useState('none')
  const [selectedValueYear, setSelectedValueYear] = useState('')
  const [search, setSearch] = useState('')
  const [taxesSelecteds, setTaxesSelecteds] = useState([])
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)

  const searchDebounce = useDebounce(search, 500)
  const selectedYearDebounce = useDebounce(selectedValueYear, 500)
  const statusTaxesDebounce = useDebounce(activeTab, 500)

  const { t } = useTranslation()

  const yearOptions = generateYear()

  useEffect(() => {
    dispatchGetTaxesList()
  }, [searchDebounce, statusTaxesDebounce, selectedYearDebounce])

  const dispatchGetTaxesList = () => {
    dispatch(
      getTaxes({
        searchDebounce,
        statusTaxesDebounce,
        selectedYearDebounce,
      }),
    )
  }

  useEffect(() => {
    const path = `taxes`
    const unsubscribe = database()
      .ref(path)
      .on('child_added', () => {
        dispatchGetTaxesList()
      })

    return () => {
      database().ref(path).off('value', unsubscribe)
    }
  }, [])

  const dispatchDeletesActions = async () => {
    setDeleteLoading(true)

    const deleteOneTax = async id => {
      return await dispatch(deleteTax({ id }))
    }

    await Promise.all(taxesSelecteds.map(deleteOneTax))
    setDeleteLoading(false)
    setShowDeleteModal(false)
    setTaxesSelecteds([])
    dispatch(setDeleteMode(false))
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
      title: t('taxListScreen.labels.activeTaxes'),
      action: () => {
        setActiveTab('activeTaxes')
      },
    },
    {
      id: 'inactiveTaxes',
      title: t('taxListScreen.labels.inactiveTaxes'),
      action: () => {
        setActiveTab('inactiveTaxes')
      },
    },
    {
      id: 'allTaxes',
      title: t('taxListScreen.labels.allTaxes'),
      action: () => {
        setActiveTab('allTaxes')
      },
    },
  ]

  const itemsTabSelects = [
    {
      id: 'year',
      title: t('taxListScreen.labels.byYear'),
      action: () => {
        setSelectedValueYear('1800')
        setActiveTabSelect('year')
      },
    },
    {
      id: 'none',
      title: t('taxListScreen.labels.none'),
      action: () => {
        setSelectedValueYear('')
        setActiveTabSelect('none')
      },
    },
  ]

  return (
    <TaxListView
      activeTab={activeTab}
      itemsTab={itemsTab}
      itemsTabSelects={itemsTabSelects}
      activeTabSelect={activeTabSelect}
      list={list}
      loading={loading}
      selectedValueYear={selectedValueYear}
      setSelectedValueYear={setSelectedValueYear}
      yearOptions={yearOptions}
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

export default TaxListContainer
