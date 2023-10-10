import { ListItem } from './ListItem'
import { Loading } from './Loading'

interface ListProps {
  tickets: FormattedTicket[]
  isLoading: boolean
  saveRemovedTicket: (ticketId: string) => void
}

export function List({ tickets, isLoading, saveRemovedTicket }: ListProps) {
  return (
    <table cellSpacing={0} cellPadding={10} style={{ textAlign: 'center' }}>
      <tbody>
        <tr style={styles.tableHeader}>
          <th>N° pedido</th>
          <th>N° bilhete</th>
          <th>N° documento</th>
          <th>Nome do passageiro</th>
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
        ) : (
          tickets.map((ticket) => (
            <ListItem
              key={ticket.orderId}
              {...ticket}
              saveRemovedTicket={saveRemovedTicket}
            />
          ))
        )}
      </tbody>
    </table>
  )
}

const styles = {
  tableHeader: {
    color: '#747bff',
    fontSize: '1rem',
  },
}
