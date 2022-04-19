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
  { field: "vl01", headerName: "Jan", width: 80, type: 'number', valueFormatter: f_val },
  { field: "vl02", headerName: "Fev", width: 80, type: 'number', valueFormatter: f_val },
  { field: "vl03", headerName: "Mar", width: 80, type: 'number', valueFormatter: f_val },
  { field: "vl04", headerName: "Abr", width: 80, type: 'number', valueFormatter: f_val },
  { field: "vl05", headerName: "Mai", width: 80, type: 'number', valueFormatter: f_val },
  { field: "vl06", headerName: "Jun", width: 80, type: 'number', valueFormatter: f_val },
  { field: "vl07", headerName: "Jul", width: 80, type: 'number', valueFormatter: f_val },
  { field: "vl08", headerName: "Ago", width: 80, type: 'number', valueFormatter: f_val },
  { field: "vl09", headerName: "Set", width: 80, type: 'number', valueFormatter: f_val },
  { field: "vl10", headerName: "Out", width: 80, type: 'number', valueFormatter: f_val },
  { field: "vl11", headerName: "Nov", width: 80, type: 'number', valueFormatter: f_val },
  { field: "vl12", headerName: "Dez", width: 80, type: 'number', valueFormatter: f_val },
  { field: "vl_total", headerName: "Vl.Total", width: 100, type: 'number', valueFormatter: f_val },
];

interface iDados {
  dt_compra: string
  ticker: string
}


export default function Rendimento(props) {

  console.log('inicio...')

  const d = JSON.parse(props.dados)
  const [lista, setLista] = useState([])

  useEffect(() => {
    setLista(d)
    console.log('---', d)
  }, [d])

  function f_click() {
    console.log('click ...')
  }

  function Msg() {
    return (
      <div>
        Linha do Footer
      </div>
    )
  }


  return (

    <>
      <Button onClick={ f_click }>Executar</Button>

      <div style={{ height: 500, width: "100%" }}>


        <DataGrid
          rows={lista}
          columns={columns}
          density="compact"
          rowHeight={30}
          loading={lista.length == 0}
          className={"cell--textCenter"}
          hideFooter={false}
          hideFooterPagination={true}
          sx={{
            boxShadow: 2,
            border: 2,
            borderColor: 'primary.light',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
              backgroundColor: '#ccc'
            },
          }}
          components={{
            Footer: Msg,
          }}
        />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {

  console.log('api..........')
  
  const s = `
              select id=ROW_NUMBER() OVER(ORDER BY ticker asc), x.*
              from (
                select  ticker,
                        vl01 = sum(case when MONTH(dt_lan)=1 then vl_total else 0 end),
                        vl02 = sum(case when MONTH(dt_lan)=2 then vl_total else 0 end),
                        vl03 = sum(case when MONTH(dt_lan)=3 then vl_total else 0 end),
                        vl04 = sum(case when MONTH(dt_lan)=4 then vl_total else 0 end),
                        vl05 = sum(case when MONTH(dt_lan)=5 then vl_total else 0 end),
                        vl06 = sum(case when MONTH(dt_lan)=6 then vl_total else 0 end),
                        vl07 = sum(case when MONTH(dt_lan)=7 then vl_total else 0 end),
                        vl08 = sum(case when MONTH(dt_lan)=8 then vl_total else 0 end),
                        vl09 = sum(case when MONTH(dt_lan)=9 then vl_total else 0 end),
                        vl10 = sum(case when MONTH(dt_lan)=10 then vl_total else 0 end),
                        vl11 = sum(case when MONTH(dt_lan)=11 then vl_total else 0 end),
                        vl12 = sum(case when MONTH(dt_lan)=12 then vl_total else 0 end),
                        vl_total=SUM(vl_total)
                  from movimentacaoB3
                  where ind_ope in ('DIV','JCP','REN') and (YEAR(dt_lan) = @ano)
                  group by ticker
              ) as x
    `;
      
  try {
    let pool = await sql.connect(config)
  
    let r = await pool.request()
              .input('ano', sql.Int, 2021)
              .query(s)


    //const r = await sql.query`select top 100 * from compra where 1=1`
  
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
