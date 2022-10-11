import React from 'react'
import Button from '../Button/Button'

export default function Header() {
  return (
    <div className='header'>
      <Button>Закрыть</Button>
      <span className='username'></span>
    </div>
  )
}
