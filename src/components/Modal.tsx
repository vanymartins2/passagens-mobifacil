import { Dispatch, SetStateAction } from 'react'
import * as AlertDialog from '@radix-ui/react-alert-dialog'

interface ModalProps {
  ticketId: string
  tickets: FormattedTicket[]
  updateList: Dispatch<SetStateAction<FormattedTicket[]>>
}

export function Modal({ ticketId, tickets, updateList }: ModalProps) {
  function handleRemoveTicket() {
    const filteredTickets = tickets.filter(
      (ticket) => ticket.ticketNumber !== ticketId
    )
    updateList(filteredTickets)
  }

  return (
    <AlertDialog.Portal>
      <AlertDialog.Overlay id="modalOverlay" />
      <AlertDialog.Content id="modalContent">
        <AlertDialog.Title id="modalTitle">Cancelar Viagem</AlertDialog.Title>
        <AlertDialog.Description>
          Você tem certeza que deseja cancelar esta viagem?
        </AlertDialog.Description>

        <div
          style={{
            display: 'flex',
            gap: 12,
            justifyContent: 'flex-end',
            marginTop: '32px',
          }}
        >
          <AlertDialog.Cancel asChild>
            <button>Cancelar</button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <button id="danger" onClick={handleRemoveTicket}>
              Confirmar
            </button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  )
}
