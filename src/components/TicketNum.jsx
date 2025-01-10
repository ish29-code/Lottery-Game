import React from 'react'
import './TicketNum.css'
function TicketNum({num}) {
  return (
     <span className="ticket-num">
          <span>{num}</span>
     </span>


  )
}

export default TicketNum