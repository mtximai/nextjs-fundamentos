import * as React from 'react';

import { IMaskInput } from 'react-imask';
import NumberFormat from 'react-number-format';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Typography } from '@mui/material';

import Form, { SimpleItem, GroupItem, Label} from 'devextreme-react/form';
import DateBox from 'devextreme-react/date-box';
import SelectBox from 'devextreme-react/select-box';

interface iCompra {
  dt_compra: string
  ticker: string
  qtd: number
  vl_unitario: number
  dt_liquidacao: string
  vl_liquidacao: number
}

const compra: iCompra = {
  dt_compra: '',
  ticker: '',
  qtd: 0,
  vl_unitario: 0,
  dt_liquidacao: '',
  vl_liquidacao: 0
}

const corretora = [
  {cod:'A', nome:'Ágora'},
  {cod:'N', nome:'NuInvest'},
];



const birthDateOptions = { width: '100%' }

const date = new Date(2018, 9, 16, 15, 8, 12);

export default function IncluirCompraDX() {

  let x = 'A'

  return (
    <div style={{width:'500px'}}>

      <div className="dx-fieldset">

          <div className="dx-field">
            <div className="dx-field-label">Data compra</div>
            <div className="dx-field-value">
              <DateBox defaultValue={date}
                  placeholder="dd/mm/yyyy"
                  showClearButton={true}
                  useMaskBehavior={true}
                  type="date"
                  displayFormat="dd/MM/yyyy"
              />
            </div>
          </div>

        <div className="dx-field">
          <div className="dx-field-label">Corretora</div>
          <div className="dx-field-value">
            <SelectBox dataSource={corretora}
              displayExpr="nome"
              valueExpr="cod"
              defaultValue={'N'}
              value={x}
              onValueChanged={(p) => console.log(p.value, x) }

            />
          </div>
        </div>


      </div>



    </div>
  )
}
