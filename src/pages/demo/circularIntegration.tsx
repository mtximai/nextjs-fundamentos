import React, { useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import BtnSpinner from '../../components/BtnSpinner';

import { useLayoutUpdate, iContext } from '../../components/Layout';


// component
export default function CircularIntegration() {

  const ctxLayout = useLayoutUpdate() as iContext

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef<number>();

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  const handleButtonClick = () => {
  
    if (!loading) {
      setSuccess(false);
      setLoading(true);

      timer.current = window.setTimeout(() => {
                        setSuccess(true);
                        setLoading(false);
                      }, 2000);
    }

    ctxLayout.f_qtCorreioUpdate(ctxLayout.qtCorreio + 1);
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>

      <Box sx={{ m: 1, position: 'relative' }}>
        <Fab
          aria-label="save"
          color="primary"
          sx={buttonSx}
          onClick={handleButtonClick}
        >
          {success ? <CheckIcon /> : <SaveIcon />}
        </Fab>
        
        {loading && (
          <CircularProgress
            size={68}
            sx={{
              color: green[500],
              position: 'absolute',
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        )}
      </Box>

      <Box sx={{ m: 1, position: 'relative' }}>
        <Button
          variant="contained"
          sx={buttonSx}
          disabled={loading}
          onClick={handleButtonClick}
        >
          Accept terms
        </Button>
        
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
      </Box>

      <Box sx={{ m: 1, position: 'relative' }}>

        <BtnSpinner onClick={handleButtonClick} loading={loading} />

        { (p => { return p ? <p>Loading 1...</p> : null })(loading) }

        { loading && <p>Loading 2...</p> }

      </Box>

    </Box>
  );
}