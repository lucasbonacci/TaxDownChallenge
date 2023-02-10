import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoginView from './LoginView'
import { emailLogin } from '@/Store/Auth'

const LoginContainer = () => {
  const { loading } = useSelector(({ auth }) => auth)
  const dispatch = useDispatch()

  const loginAction = values => {
    dispatch(emailLogin({ email: values.email, password: values.password }))
  }

  return <LoginView loginAction={loginAction} loading={loading} />
}

export default LoginContainer
