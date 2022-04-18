import React, { useEffect, useState } from 'react'
import 'devextreme/dist/css/dx.light.css';
import Button from 'devextreme-react/button';
import {
  DataGrid,
  Column,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
  SearchPanel,
} from 'devextreme-react/data-grid';

import Chart, {
  ArgumentAxis,
  Series,
  Legend
} from 'devextreme-react/chart';
import { height } from '@mui/system';

const data = [{
  arg: 1990,
  val: 5320816667
}, {
  arg: 2000,
  val: 6127700428
}, {
  arg: 2010,
  val: 6916183482
}];


function sayHelloWorld() {
  alert('Hello world!')
}

const lista = [{
  ticker: 'BBDC3',
  qtd: 13345,
  vl_medio: 123.45
}, {
  ticker: 'ITSA4',
  qtd: 53,
  vl_medio: 2123.8
}]


export default function Dx1() {

  const [dt, setDt] = useState([])

  useEffect(() => {
    const f = fetch("/api/getFinPrecoMedio")
              .then((r) => r.json())
              .then((p) => setDt(p))
  },[])

  const pageSizes = [10, 25, 50, 100];

  return (
    <>
      <Button
        text="Click me"
        onClick={sayHelloWorld}
      />

      <Chart dataSource={data}>
        <ArgumentAxis tickInterval={10} />
        <Series type="bar" />
        <Legend visible={false} />
      </Chart>

      <div style={{ height:"350px", padding:"0px", overflow:'scroll' }}>
        <DataGrid
          id="dataGrid"
          keyExpr="ticker"
          dataSource={dt}
          allowColumnResizing={true}
          showBorders={true}
          rowAlternationEnabled={true}
        >
          <SearchPanel visible={true} highlightCaseSensitive={true} />

          <Column caption='Ticker'   dataField="ticker" dataType="string" width={100} />
          <Column caption='Qtd'      dataField="qtd"    dataType="number" format="#,###"  width={100} />
          <Column caption='Vl.Médio' dataField="vl_medio" dataType="number" format="###,###.00"  width={100} />

          <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
          <Paging defaultPageSize={5} />
        </DataGrid>
      </div>
    </>
  )
}
