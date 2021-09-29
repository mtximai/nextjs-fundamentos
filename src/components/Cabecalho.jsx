export default function Cabecalho(props) {
   // props é somente leitura - alterado

   return (
      <header>
         <h1>{props.titulo}</h1>
      </header>
   )
}