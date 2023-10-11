import { useEffect, useState } from 'react'
import { ListItem } from './ListItem'
import { Loading } from './Loading'

interface ListProps {
  tickets: FormattedTicket[]
  isLoading: boolean
  saveRemovedTicket: (ticketId: string) => void
}

export function List({ tickets, isLoading, saveRemovedTicket }: ListProps) {
  const [sortByPassengerName, setSortByPassengerName] = useState(false)
  const [sortedArray, setSortedArray] = useState<FormattedTicket[]>(tickets)

  useEffect(() => {
    setSortByPassengerName(false)
    setSortedArray(
      tickets.sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      )
    )
  }, [sortByPassengerName])

  return (
    <table cellSpacing={0} cellPadding={10} style={{ textAlign: 'center' }}>
      <tbody>
        <tr id="tableHeader" style={{ fontSize: '1rem' }}>
          <th>N° pedido</th>
          <th>N° bilhete</th>
          <th>N° documento</th>
          <th>
            <button
              id="sortButton"
              onClick={() => setSortByPassengerName(!sortByPassengerName)}
            >
              Nome do passageiro
            </button>
          </th>
          <th>Origem</th>
          <th>Destino</th>
          <th>Ida(Data/Hora)</th>
          <th>Volta(Data/Hora)</th>
          <th>Companhia de ônibus</th>
          <th>Tipo de leito</th>
          <th>Valor da poltrona(milhas)</th>
          <th></th>
        </tr>

        {isLoading ? (
          <Loading loadingState={isLoading} />
        ) : sortByPassengerName ? (
          sortedArray.map((ticket) => (
            <ListItem
              key={ticket.ticketNumber}
              {...ticket}
              saveRemovedTicket={saveRemovedTicket}
            />
          ))
        ) : (
          tickets.map((ticket) => (
            <ListItem
              key={ticket.ticketNumber}
              {...ticket}
              saveRemovedTicket={saveRemovedTicket}
            />
          ))
        )}
      </tbody>
    </table>
  )
}
