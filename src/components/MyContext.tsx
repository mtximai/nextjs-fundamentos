// 16/03/22 - Mauro
// ref: https://www.youtube.com/watch?v=5LrDIWkK_Bc&list=WL&index=2&t=633s
//      (Learn useContext In 13 Minutes)

import React, { useState, useContext } from 'react'

const MyContext = React.createContext()

export function f_myContext() {
  return useContext(MyContext)
}


export function MyProvider({ children }) {

  const [msg, setMsg] = useState('mensagem inicial')
  const [fun, setFun] = useState('')

  return (
    <MyContext.Provider value={{ msg, setMsg, fun, setFun }}>
      {children}
    </MyContext.Provider>
  )
}
