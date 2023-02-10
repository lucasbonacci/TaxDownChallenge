import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CreateAccountView from './CreateAccountView'
import { createAccount } from '@/Store/Auth'

const CreateAccountContainer = () => {
  const { loading } = useSelector(({ auth }) => auth)
  const dispatch = useDispatch()

  const createAccountAction = values => {
    dispatch(createAccount({ email: values.email, password: values.password }))
  }

  return (
    <CreateAccountView
      createAccountAction={createAccountAction}
      loading={loading}
    />
  )
}

export default CreateAccountContainer
