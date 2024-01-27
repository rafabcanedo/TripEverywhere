import { ReactNode } from 'react'

export interface InputProps {
  placeholder: string
  type: string
  id: string
}

export interface UserState {
  currentUser: null
  error: null
  loading: boolean
}

export interface PrivateLayoutProps {
  children: ReactNode
}
