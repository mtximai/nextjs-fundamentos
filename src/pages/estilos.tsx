// 11/03/22

import styles from '../styles/Estilos.module.css'
import { Box, flexbox, styled } from '@mui/system';


const MyDiv = styled('div')({
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 8,
  borderRadius: 4,
  margin:10
});

const styles2 = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#238',
}

// const styles3 = <style jsx>{`
//   .myStyle {
//     display: flex;
//     justifyContent: center;
//     alignItems: center;
//     margin: 10px;
//     background: #ccc;
//     padding: 30px;
//     box-shadow: 2px 3px 5px blue;
//     text-align: center;
//     max-width: 100px;
//   }
// `}</style>



// component
export default function Estilos() {

  return (
    <div id='myId' className={styles.principal}>
      <h1>Estilos - div principal com modules.css</h1>

      <MyDiv>Styled div</MyDiv>

      <Box sx={{
          backgroundColor: 'lightcoral',
          margin: '10px'
      }}>
        Estilo com sx
      </Box>

      <div className='my-style'>
        <h2>Utilizando style jsx</h2>

        <style jsx>{`
          .my-style {
            margin: 10px;
            background: #ccc;
            padding: 30px;
            box-shadow: 2px 3px 5px blue;
            transform: rotateZ(-1deg);
            text-align: center;
            max-width: 800px;
          }
        `}</style>
      </div>

      <div style={styles2}>
        <h3>styles2</h3>
      </div>

      {/* <div style={styles3}>
        <h3>styles3</h3>
      </div> */}


    </div>
  )
}
