import React from 'react'
import { useState } from 'react'
import './Lottery.css'
import { genTicket, sum } from '../helper'
import Ticket from './Ticket'

function Lottery({n=3,winningSum=15}) {
     let [ticket, setTicket] = useState(genTicket(n))
     let isWinning = sum(ticket) === winningSum

     let buyTicket = () => {
          setTicket(genTicket(n))
     }

  return (
    <div className="lottery">
      <h1>Lottery Game</h1>
      <Ticket ticket={ticket}/>
      <button className='btn' onClick={(buyTicket)}>Generate Ticket</button>
      <h2>{isWinning && "Congratulations! You Won!!"}</h2>
    </div>

  )
}

export default Lottery