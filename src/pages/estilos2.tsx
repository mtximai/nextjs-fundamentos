// MUI styled() - Mauro - 20/03/22

import React from 'react'
import { styled } from '@mui/material/styles';
// import { styled } from '@mui/system'
import { Paper, Container, Grid, Typography, Box, Rating } from '@mui/material'
import { AccessTime } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import protocoloAtos from '../data/protocoloAtos.json'
import VisualizadorAtos from '../components/VisualizadorAtos';

// MUI5 (Material UI) Crash Course
// https://www.youtube.com/watch?v=o1chMISeTC0



// sintaxe: styled(Paper, {})({})

const MyPaper = styled(Paper, {})({
  color: 'red',
  backgroundColor: 'silver',
  magin: 'auto',
  height: '5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

})

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: '20px'
}));


export default function Estilos2() {
  return (
    <Container>

      <Grid container spacing={1}>

        <Grid item xs={12} container spacing={2}>

          <Grid item xs={3}>
            <Demo sx={{height:'200px', overflow:'auto'}}>
              <Typography >Estilo #2</Typography>
              <Typography variant='caption'>Estilo #2</Typography>

              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>

              {/* {protocoloAtos.map((p, i) => <Typography variant='caption' component='p'>{p.nm_peca}</Typography> )} */}

            </Demo>
          </Grid>

          <Grid item xs={3}>
            <MyPaper>
              <Typography>Teste</Typography>
            </MyPaper>
          </Grid>

          <Grid item xs={3}>
            <Paper elevation={4} sx={{backgroundColor:'#c5cae9'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, vel? Quisquam reiciendis inventore tenetur in labore excepturi officia obcaecati fugit quidem impedit sed ratione aperiam corrupti, delectus saepe fuga commodi esse ipsam maiores magni beatae ex minima. Ullam, hic consequatur!
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Box
              marginLeft={1}
              sx={{
                display: 'flex',
                backgroundColor:'#cdcde6',
                height: '200px',
                padding:1
              }}
            >
              <AccessTime />
              <Typography sx={{marginLeft:1}}>10 horas</Typography>

              <Rating
                name='read-only'
                value={3.5}
                readOnly
                precision={0.5}
                size='small'
              />
            </Box>
          </Grid>
        </Grid>
        
        <Grid item container sx={{marginTop:2}}>
          <Grid item xs={12}>
            <VisualizadorAtos codProtocolo='999999/2022' atos={protocoloAtos} />
          </Grid>
        </Grid>

      </Grid>
    </Container>

  )
}
