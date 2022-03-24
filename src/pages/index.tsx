// https://mui.com/material-ui/react-list/
// 20/03/22 - Mauro

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import Container from '@mui/material/Container';
import { useRouter } from 'next/router'
import ConfirmationDialog from '../components/DialogConfirmation';
import BtnSpinner from '../components/BtnSpinner';
import DisplayNumber from "../components/DisplayNumber";


function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));


// Component
export default function InteractiveList() {

  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  // Utilizado pelo Dialog:
  const [open, setOpen] = React.useState(false);
  const [msgDialog, setMsgDialog] = React.useState('')

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleCloseDialog = (confirm: boolean) => {
    setOpen(false);
    setMsgDialog(confirm ? '( Ok )' : '( Cancel )')
  };


   // Para BtnSpinner
   const [loading, setLoading] = React.useState(false)

   function clickPesquisar() {
      setLoading(true)

      setTimeout(() => {
         setLoading(false)
      }, 2000)
   }



  function f_onClick() {
    alert('xxx')
  }

  const router = useRouter();


  return (
    <Container>

      <Box sx={{ flexGrow: 1, maxWidth: 752 }}>

        <Grid container spacing={2}>

          <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Testes de componentes
            </Typography>

            <Demo>
              <List dense={dense}>
                <ListItem>
                  <ListItemText
                    primary="URL dinâmica"
                    onClick={ () => router.push('/cliente/123') }
                    sx={{cursor:'pointer'}}
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary="Integração com API"
                    onClick={ () => router.push('/testeApi') }
                    sx={{cursor:'pointer'}}
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary={`Abre o Confirmation Dialog ${msgDialog}`}
                    onClick={ handleClickListItem }
                    sx={{cursor:'pointer'}}
                  />
                </ListItem>

              </List>
            </Demo>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Icon with text
            </Typography>

            <Demo>
              <List dense={dense}>
                {generate(
                  <ListItem>
                    <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Single-line item"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>,
                )}
              </List>
            </Demo>
          </Grid>

        </Grid>

        <Grid container spacing={2}>

          <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Avatar with text
            </Typography>

            <Demo>
              <List dense={dense}>
                {generate(
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Single-line item"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>,
                )}
              </List>
            </Demo>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Avatar with text and icon
            </Typography>
            
            <Demo>
              <List dense={dense}>
                {generate(
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>

                    <ListItemText
                      primary="Single-line item"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>,
                )}
              </List>
            </Demo>
          </Grid>

        </Grid>
      </Box>

      <ConfirmationDialog
        id="ringtone-menu"
        open={open}
        onClose={handleCloseDialog}
        title='Confirmation Dialog'
      >
        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <Typography>Minha mensagem #1</Typography>

          <Box sx={{display:'flex'}}>
            <DisplayNumber numero={1} />
            <DisplayNumber numero={20} />
          </Box>

          <BtnSpinner loading={ loading } onClick={ clickPesquisar } text='Botão BtnSpinner' />
        </Box>
      </ConfirmationDialog>

    </Container>

  );
}
