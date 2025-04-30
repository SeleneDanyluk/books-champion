import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'

const NotFound = () => {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/libros');
  }

  return (
   <div>
     <div>Uppppps! La página que buscas no existe!</div>
     <Button onClick={handleClick}>Volver al inicio</Button>
   </div>
  )
}

export default NotFound