// Curso React + Redux: Fundamentos (Coder)

import Navegador from '../components/Navegador'

export default function Inicio() {
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
         <Navegador texto="Integração com API #01"  destino="/integracao1" cor="#42a9a9" />
      </div>
   )
}