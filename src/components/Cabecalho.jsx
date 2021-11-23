export default function Cabecalho(props) {
   // props é somente leitura - alterado 3

   return (
      <header>
         <h1>{props.titulo}</h1>
      </header>
   )
}