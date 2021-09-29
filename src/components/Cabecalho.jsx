export default function Cabecalho(props) {
   // props é somente leitura - alterado 2

   return (
      <header>
         <h1>{props.titulo}</h1>
      </header>
   )
}