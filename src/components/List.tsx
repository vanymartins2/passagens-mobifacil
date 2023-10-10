import { ListItem, ListItemProps } from './ListItem'

export function List() {
  const item: ListItemProps = {
    orderId: '1',
    arrivalCity: 'São Paulo',
    departureCity: 'Ribeirão Preto',
    arrivalDate: '23/11/2023 08:00',
    departureDate: '25/11/2023 08:00',
    name: 'Vanessa Martins',
    bookingClass: 'Executivo',
    busCompanyName: 'Cometa',
    documentNumber: '12345678',
    ticketNumber: '123456',
    seatCostMiles: '8000',
  }
  return (
    <table cellSpacing={0} cellPadding={8} style={{ textAlign: 'center' }}>
      <tbody>
        <tr style={styles.tableHeader}>
          <th style={styles.header}>N° pedido</th>
          <th style={styles.header}>N° bilhete</th>
          <th style={styles.header}>N° documento</th>
          <th style={styles.header}>Nome do passageiro</th>
          <th style={styles.header}>Origem</th>
          <th style={styles.header}>Destino</th>
          <th style={styles.header}>Ida(Data/Hora)</th>
          <th style={styles.header}>Volta(Data/Hora)</th>
          <th style={styles.header}>Companhia de ônibus</th>
          <th style={styles.header}>Tipo de leito</th>
          <th style={styles.header}>Valor da poltrona(milhas)</th>
        </tr>
        <ListItem {...item} />
      </tbody>
    </table>
  )
}

const styles = {
  tableHeader: {
    color: '#747bff',
    fontSize: '1rem',
  },
  header: {
    borderBottom: '1px solid rgba(100,108,255,0.54)',
    borderRight: '1px solid rgba(100,108,255,0.54)',
  },
}
