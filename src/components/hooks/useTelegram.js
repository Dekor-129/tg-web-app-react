import React from 'react'
const tg = window.Telegram.WebApp

export default function useTelegram() {
  const onClose = () =>{
    tg.close()
  }

  const onToggleButton = () =>{
    if(tg.MainBuuton.isVisible) {
      tg.MainBuuton.hide()
    } else {
      tg.MainBuuton.show()
    }
  }

  return {
    onClose,
    onToggleButton,
    tg,
    user: tg?.initDataUnsafe?.user,
  }
}
