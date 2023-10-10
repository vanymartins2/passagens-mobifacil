interface Ticket {
  source: string
  tripType: string
  totalMiles: string
  date: string
  orderId: string
  status: string
  segments: Segment[]
}

interface Segment {
  busType: string
  segment: string
  refundable: string
  stops: string
  legs: Leg[]
}

interface Leg {
  busClass: string
  busCompanyCode: string
  busCompanyName: string
  arrivalBusStationCode: string
  departureBusStationCode: string
  departureDate: string
  arrivalDate: string
  departureCity: string
  departureState: string
  arrivalCity: string
  arrivalState: string
  seats: Seat[]
}

interface Seat {
  chosenCost: string
  costMiles: string
  busFareAmount: string
  costMoney: string
  recordLocator: string
  seatNumber: string
  ticketNumber: string
  partnerTransactionId: string
  serviceId: string
  bookingClass: string
  paxDocument: string
  busPassengerId: string
  passenger: Passenger
}

interface Passenger {
  indexGDS: string
  firstName: string
  lastName: string
  type: string
  documentNumber: string
  documentType: string
}

interface FormattedTicket {
  status: string
  date: string
  name: string
  documentNumber: string
  seatCostMiles: string
  bookingClass: string
  busCompanyName: string
  partnerTransactionId: string
  ticketNumber: string
  orderId: string
  departureCity: string
  arrivalCity: string
  departureDate: string
  arrivalDate: string
}
