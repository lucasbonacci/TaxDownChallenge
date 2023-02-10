import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StepOneView from './StepOneView'

import { getTaxes } from '@/Store/Taxes'

const StepOneContainer = () => {
  const dispatch = useDispatch()
  const { list } = useSelector(({ taxes }) => taxes)

  console.log(list)

  useEffect(() => {
    dispatch(getTaxes('taxes'))
  }, [])

  return <StepOneView />
}

export default StepOneContainer
