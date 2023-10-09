import moment from 'moment'

export function formatTableRows(data: Ticket[]) {
  if (!data) {
    return []
  }

  const result: FormattedTable[] = data.flatMap((ticket) =>
    ticket.segments.flatMap((segment) =>
      segment.legs.flatMap((leg) =>
        leg.seats.map((seat) => {
          const passenger = seat.passenger
          return {
            status: ticket.status,
            date: moment(ticket.date).format('DD/MM/YYYY HH:mm'),
            name: `${passenger.firstName} ${passenger.lastName}`,
            documentNumber: passenger.documentNumber,
            seatCostMiles: seat.costMiles,
            bookingClass: seat.bookingClass,
            busCompanyName: leg.busCompanyName,
            partnerTransactionId: seat.partnerTransactionId,
            ticketNumber: seat.ticketNumber,
            orderId: ticket.orderId,
            departureCity: leg.departureCity,
            arrivalCity: leg.arrivalCity,
            departureDate: moment(leg.departureDate).format('DD/MM/YYYY HH:mm'),
            arrivalDate: moment(leg.arrivalDate).format('DD/MM/YYYY HH:mm'),
          }
        })
      )
    )
  )

  return result
}
