import * as React from 'react';

import { IMaskInput } from 'react-imask';
import NumberFormat from 'react-number-format';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Typography } from '@mui/material';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(

  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <IMaskInput
        {...other}
        mask="aaaa00"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
        overwrite
        placeholder='AAAA99'
      />
    );
  },
);

const NumberFormatCustom = React.forwardRef<NumberFormat, CustomProps>(
  function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        prefix="$"
      />
    );
  },
);

interface State {
  ticker: string
  dt_compra: string
  qt_compra: string
}

export default function IncluirCompra() {

  const [values, setValues] = React.useState<State>({
    ticker: '',
    dt_compra: '',
    qt_compra: '0',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    console.log(event.target.name, event.target.value)

    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };


  return (
    <>
      <Typography variant='h5'>Incluir compra de ativo</Typography>
      <hr/>

      <FormControl variant="standard">
        <InputLabel htmlFor="idTicker">Ticker</InputLabel>

        <Input
          id="idTicker"
          name="ticker"
          value={values.ticker}
          onChange={handleChange}
          inputComponent={TextMaskCustom as any}
          autoFocus={true}
          
        />
      </FormControl>

      <FormControl variant="standard">
        <TextField
          id="idDtCompra"
          name='dt_compra'
          value={values.dt_compra}
          label="Dt.Compra"
          InputProps={{ readOnly: false }}
          size="small"
          fullWidth
          onChange={handleChange}
        />
      </FormControl>

      <FormControl variant="standard">
        <IMaskInput
          mask="aaaa00"

        />

      </FormControl>



    </>
  )
}
