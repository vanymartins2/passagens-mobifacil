import { Trash } from 'lucide-react'
import * as AlertDialog from '@radix-ui/react-alert-dialog'

export interface ListItemProps {
  orderId: string
  ticketNumber: string
  documentNumber: string
  name: string
  departureCity: string
  arrivalCity: string
  departureDate: string
  arrivalDate: string
  busCompanyName: string
  bookingClass: string
  seatCostMiles: string
}

export function ListItem(props: ListItemProps) {
  return (
    <>
      <tr style={styles.tableContent}>
        <td style={styles.content}>{props.orderId}</td>
        <td style={styles.content}>{props.ticketNumber}</td>
        <td style={styles.content}>{props.documentNumber}</td>
        <td style={styles.content}>{props.name}</td>
        <td style={styles.content}>{props.departureCity}</td>
        <td style={styles.content}>{props.arrivalCity}</td>
        <td style={styles.content}>{props.departureDate}</td>
        <td style={styles.content}>{props.arrivalDate}</td>
        <td style={styles.content}>{props.busCompanyName}</td>
        <td style={styles.content}>{props.bookingClass}</td>
        <td style={styles.content}>{props.seatCostMiles}</td>

        <td>
          <AlertDialog.Trigger asChild>
            <button>
              <Trash size={18} color="#646cff" />
            </button>
          </AlertDialog.Trigger>
        </td>
      </tr>
    </>
  )
}

const styles = {
  tableContent: {
    color: '#e4e6eb',
    fontSize: '0.85rem',
    textWrap: 'nowrap',
  },
  content: {
    borderBottom: '1px solid rgba(242,242,242,0.4)',
  },
}
