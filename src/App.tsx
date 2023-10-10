import './styles/index.css'
import { useEffect, useState } from 'react'

import * as AlertDialog from '@radix-ui/react-alert-dialog'

import { api } from './api'
import { formatTableRows } from './utils/formatTableRows'

import { Header } from './components/Header'
import { List } from './components/List'
import { Modal } from './components/Modal'
import { Input } from './components/Input'

export default function App() {
  const [tickets, setTickets] = useState<FormattedTicket[]>([])
  const [loading, setLoading] = useState(true)

  async function getTickets() {
    try {
      const response = await api.get('/data')
      setTickets(formatTableRows(response.data))
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      getTickets()
    }, 2000)
  }, [])

  return (
    <>
      <Header />
      <AlertDialog.Root>
        <main
          style={{
            margin: '0 auto',
            maxWidth: 1280,
            padding: '1.85rem 1.0875rem 2rem',
          }}
        >
          <Input placeholder="Digite o número do pedido para pesquisar..." />

          <List tickets={tickets} isLoading={loading} />
        </main>

        <Modal />
      </AlertDialog.Root>
    </>
  )
}
