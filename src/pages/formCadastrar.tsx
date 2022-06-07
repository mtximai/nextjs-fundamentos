// Teste com <form> - 02/06/22
// https://www.youtube.com/watch?v=OPuWlYYGDu8

import React from 'react'

interface IForm {
  nome: string
  idade: number
  msg: string
}

const iniValues = {
  nome: '',
  idade: 0,
  msg: ''
}

function getFormValues() {

  if (typeof window == 'undefined') {
    // Executando fora do browser?
    return iniValues
  }
  else {
    // Executando no cliente
    const storedValues = localStorage.getItem('form')
  
    if (storedValues) {
      return JSON.parse(storedValues)
    } else {
      return iniValues
    }
  }
}

export default function FormCadastrar() {
  
  const [values, setValues] = React.useState<IForm>(getFormValues)

  React.useEffect(() => {
    localStorage.setItem('form', JSON.stringify(values))
  }, [values])


  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setValues(iniValues)

    alert('Submit: limpou o localStorage!')
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setValues((previousValue) => ({
      ...previousValue, [e.target.name]: e.target.value
    }))
  }

  return (
    <main>
      <header>
        <h1>Form Cadastrar</h1>
        <h3>Utiliza o localStorage para armazenagem temporária dos dados</h3>
      </header>

      <form onSubmit={handleSubmit}>

        <div>

        <label htmlFor='nome'>
          Nome:
          <input
            autoComplete='off'
            type='text'
            name='nome'
            id='nome'
            placeholder='Seu nome'
            onChange={handleChange}
            value={values.nome}
            />

           <small> (Seu nome para ser identificado)</small>
        </label>
        </div>

        <div>

        <label htmlFor='idade'>
          Idade:
          <input
            autoComplete='off'
            type='text'
            name='idade'
            id='idade'
            placeholder='99'
            onChange={handleChange}
            value={values.idade}
            />
        </label>
        </div>


        <button type='submit'>Enviar</button>
      </form>
    </main>
  )
}
