// componente com estado - curso react alula 96

import {useState} from 'react';
import Layout from "../components/Layout";

export default function Estado() {

   // utilizando destructuring para pegar os valores do array
   const [numero, setNumero] = useState(0)

   function incrementar() {
      setNumero(numero + 1)
   }

   return (
      <Layout titulo="Componente com Estado">
         <span>{numero}</span>
         <button onClick={incrementar}>Incrementar</button>
      </Layout>
   )
}