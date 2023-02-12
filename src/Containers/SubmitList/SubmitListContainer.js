import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import SubmitListView from './SubmitListView'
import useDebounce from '@/Hooks/useDebounce'
import { generateAge } from '@/Helpers/generateYear'
import {
  getTaxSubmission,
  deleteSubmission,
  setDeleteMode,
} from '@/Store/Taxes'

const SubmitListContainer = ({ route }) => {
  const dispatch = useDispatch()
  const { loading, deleteMode, submissionList } = useSelector(
    ({ taxes }) => taxes,
  )
  const [activeTabSelect, setActiveTabSelect] = useState('none')
  const [selectedValueAge, setSelectedValueAge] = useState('')
  const [search, setSearch] = useState('')
  const [submissionsSelecteds, setTaxesSelecteds] = useState([])
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)

  const searchDebounce = useDebounce(search, 500)
  const selectedAgeDebounce = useDebounce(selectedValueAge, 500)

  const { t } = useTranslation()

  console.log(submissionList)

  const ageOptions = generateAge()

  const id = route?.params?.id

  useEffect(() => {
    dispatch(
      getTaxSubmission({ data: { searchDebounce, selectedAgeDebounce }, id }),
    )
  }, [searchDebounce, selectedAgeDebounce])

  const dispatchDeletesActions = async () => {
    setDeleteLoading(true)

    const deleteOneSubmission = async idSubmission => {
      return await dispatch(deleteSubmission({ idTax: id, idSubmission }))
    }

    await Promise.all(submissionsSelecteds.map(deleteOneSubmission))
    setDeleteLoading(false)
    setShowDeleteModal(false)
    setTaxesSelecteds([])
    dispatch(setDeleteMode(false))
  }

  const selectAllSubmissions = () => {
    const idTaxes = submissionList.map(tax => tax.id)
    setTaxesSelecteds(idTaxes)
  }

  const deselectAllSubmissions = () => {
    setTaxesSelecteds([])
  }

  const selectSubmissions = useCallback(
    id => {
      setTaxesSelecteds(prevTaxes => {
        return prevTaxes.includes(id)
          ? prevTaxes.filter(selectId => selectId !== id)
          : [...prevTaxes, id]
      })
    },
    [submissionsSelecteds],
  )

  const itemsTabSelects = [
    {
      id: 'age',
      title: t('taxListScreen.labels.byAge'),
      action: () => {
        setSelectedValueAge('0')

        setActiveTabSelect('age')
      },
    },
    {
      id: 'none',
      title: t('taxListScreen.labels.none'),
      action: () => {
        setSelectedValueAge('')
        setActiveTabSelect('none')
      },
    },
  ]

  return (
    <SubmitListView
      itemsTabSelects={itemsTabSelects}
      activeTabSelect={activeTabSelect}
      submissionList={submissionList}
      loading={loading}
      selectedValueAge={selectedValueAge}
      setSelectedValueAge={setSelectedValueAge}
      ageOptions={ageOptions}
      setSearch={setSearch}
      search={setSearch}
      deleteMode={deleteMode}
      deselectAllSubmissions={deselectAllSubmissions}
      selectAllSubmissions={selectAllSubmissions}
      submissionsSelecteds={submissionsSelecteds}
      selectSubmissions={selectSubmissions}
      setShowDeleteModal={setShowDeleteModal}
      showDeleteModal={showDeleteModal}
      deleteLoading={deleteLoading}
      dispatchDeletesActions={dispatchDeletesActions}
    />
  )
}

export default SubmitListContainer
