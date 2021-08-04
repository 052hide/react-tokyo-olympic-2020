import { ReactNode } from 'react'

export type Props = {
  visible: boolean
  children: ReactNode
  close?: () => void
}
