// 06/04/22
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const sql = require('mssql')

const config = {
  server: 'localhost',
  port: 1433,
  user: 'sa1',
  password: 'sa2',
  database: 'ctb2021',
  options: {
    enableArithAbort: true,
    encrypt: false,
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
}


function f_val( {value} ) {
  return `${ value.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) }`
}

function f_qtd( {value} ) {
  return `${ (value).toLocaleString('pt-BR') }`
}

function f_dt( {value} ) {
  return `${ (new Date( value )).toLocaleDateString('pt-BR', {timeZone: 'UTC'}) }`
}

const columns: GridColDef[] = [
  { field: "id", hide: true },
  { field: "ticker", headerName: "Ticker", width: 80 },
  { field: "ind_corretora", headerName: "Corretora", width: 100, headerAlign: 'center' },
  { field: "dt_compra", headerName: "Dt.Compra", width: 100, valueFormatter: f_dt },
  { field: "qtd", headerName: "Qtd", width: 80, type: 'number', valueFormatter: f_qtd },
  { field: "vl_unitario", headerName: "Vl.Unitário", width: 100, type: 'number', valueFormatter: f_val },
  { field: "vl_custo", headerName: "Vl.Custo", width: 100, type: 'number', valueFormatter: f_val },
  { field: "dt_liquidacao", headerName: "Dt.Liquidacao", width: 100, valueFormatter: f_dt },
  { field: "observacao", headerName: "Observação", width: 150 }
];

interface iDados {
  dt_compra: string
  ticker: string
}


export default function Compra(props) {

  console.log('inicio...')

  const d = JSON.parse(props.dados)
  const [lista, setLista] = useState([])

  useEffect(() => {
    setLista(d)
    //console.log('---', d)
  }, [])

  function f_click() {
    console.log('click ...')
  }

  return (

    <>
      <Button onClick={ f_click }>Executar</Button>

      <div style={{ height: 500, width: "100%" }}>


        <DataGrid
          rows={lista}
          columns={columns}
          pageSize={15}
          rowsPerPageOptions={[15]}
          density="compact"
          rowHeight={30}
          loading={lista.length == 0}
          className={"cell--textCenter"}
          sx={{
            boxShadow: 2,
            border: 2,
            borderColor: 'primary.light',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
              backgroundColor: '#ccc'
            },
          }}
        />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {

  console.log('api..........')
  
  try {
    let pool = await sql.connect(config)
  
    const r = await sql.query`select top 100 * from compra where 1=1`
  
    const lista = r.recordset
  
    const rs = JSON.stringify(lista)
  
    console.log('api - finalizando......................')

    return {
      props: {dados: rs},
    }
  
  }
  catch (err) {
    console.log('erro', err)
    
  }

}
