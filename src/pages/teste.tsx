import DisplayNumber from "../components/DisplayNumber";

export default function Teste() {
   return (
      <div style={{
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
         height: "100vh"
      }}>

         <DisplayNumber numero={1} />
         <DisplayNumber numero={20} />
         <DisplayNumber numero={300} />

      </div>
   )
}