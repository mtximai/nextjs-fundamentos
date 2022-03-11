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

    </div>
  )
}
