import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container>
    <div className='text-center py-4' style={{color:"#787878"}}>
      &#169;2022 Copyright : <a href = "mailto: bakderohit123@gmail.com" style={{color:"grey"}}>
        <b>rohit bakde </b>
        </a>
    </div>
    </Container>
  )
}

export default Footer