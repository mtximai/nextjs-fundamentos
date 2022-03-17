// Curso React + Redux: Fundamentos (Coder)

import { useState } from 'react'
import Navegador from '../components/Navegador'
import DisplayNumber from "../components/DisplayNumber";
import BtnSpinner from "../components/BtnSpinner";


export default function Inicio() {

   // Para BtnPesquisar
   const [loading, setLoading] = useState(false)

   function clickPesquisar() {
      setLoading(true)

      setTimeout(() => {
         setLoading(false)
      }, 2000)

   }
  
   return (

      <div style={
         {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
         }
      }>
         <Navegador texto="Navegação #02"  destino="/cliente/123" cor="blue" />
         <Navegador texto="Integração com API #01"  destino="/testeApi" cor="#42a9a9" />

         <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "10vh",
            border: "1px solid red",
            padding: '10'
         }}>
            <DisplayNumber numero={1} />
            <DisplayNumber numero={20} />
            <DisplayNumber numero={300} />
         </div>

         <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "10vh",
            width: '150px',
            border: "1px solid red"
         }}>
            <BtnSpinner loading={ loading } onClick={ clickPesquisar } text='Processar' />
         </div>

      </div>
   )
}
