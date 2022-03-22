import React from "react";

// Exemplo de callback - 19/03/22
/*
function mycallback(func):void {
  func('msg inicial')  // injeta uma parâmetro inicial
}

mycallback( (e) => console.log(e) )
*/

export default function Teste() {
  return (
    <>
      <div
        style={{
          margin: '10px',
          backgroundColor:'green',
          display: 'block'
        }}>div 1
      </div>

      <div
        style={{
          margin: '10px',
          backgroundColor:'green',
          display: 'block'
        }}>div 2
      </div>
    </>
  );
}
