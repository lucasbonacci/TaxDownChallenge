import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LogoutView from './LogoutView'
import { logout } from '@/Store/Auth'

const LogoutContainer = () => {
  const { loading } = useSelector(({ auth }) => auth)
  const dispatch = useDispatch()

  const logoutAction = () => {
    dispatch(logout())
  }

  return <LogoutView logoutAction={logoutAction} loading={loading} />
}

export default LogoutContainer
