// 16/03/22 - Mauro
// ref: https://www.youtube.com/watch?v=5LrDIWkK_Bc&list=WL&index=2&t=633s
//      (Learn useContext In 13 Minutes)

import React, { useState, useContext } from 'react'

interface iContext {
  msg: string
  setMsg(msg: string): void
}

const MyContext = React.createContext<iContext>(null)

export function useMyContext() {
  return useContext(MyContext)
}


export function MyProvider({ children }) {

  const [msg, setMsg] = useState('mensagem inicial')

  return (
    <MyContext.Provider value={{ msg, setMsg }}>
      {children}
    </MyContext.Provider>
  )
}
