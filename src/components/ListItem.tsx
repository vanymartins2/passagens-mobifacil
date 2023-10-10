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
      <tr style={{ color: '#e4e6eb', fontSize: '0.85rem' }}>
        <td>{props.orderId}</td>
        <td>{props.ticketNumber}</td>
        <td>{props.documentNumber}</td>
        <td>{props.name}</td>
        <td>{props.departureCity}</td>
        <td>{props.arrivalCity}</td>
        <td>{props.departureDate}</td>
        <td>{props.arrivalDate}</td>
        <td>{props.busCompanyName}</td>
        <td>{props.bookingClass}</td>
        <td>{props.seatCostMiles}</td>

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
