import React from 'react'
import './Ticket.css'
import TicketNum from './TicketNum'
function Ticket({ticket}) {
  return (
    <div className="ticket">
      {ticket.map((num, i) => 
         <TicketNum num={num} key={i} />
      )}
    </div>
  )
}

export default Ticket