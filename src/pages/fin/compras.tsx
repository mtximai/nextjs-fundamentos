// 19/04/22

import React, { useCallback, useEffect, useState } from 'react'
import 'devextreme/dist/css/dx.light.css';
import Button2 from 'devextreme-react/button';
import {
  DataGrid,
  Column,
  Selection,
  Export,
  Button,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
  SearchPanel,
} from 'devextreme-react/data-grid';

import { Workbook } from 'exceljs';
import saveAs from 'file-saver';
import { exportDataGrid } from 'devextreme/excel_exporter';

//import 'devextreme/dist/css/dx.light.css';
//import 'devextreme/dist/css/dx.dark.css';
//import 'devextreme/dist/css/dx.material.blue.light.compact.css';
//import 'devextreme/dist/css/dx.material.teal.light.compact.css';
import 'devextreme/dist/css/dx.material.purple.light.compact.css';

import styles from '../../styles/Estilos.module.css'
import Box from '@mui/material/Box';


function exportGrid(e) {
  const workbook = new Workbook(); 
  const worksheet = workbook.addWorksheet("Planilha"); 

  exportDataGrid({ 
      worksheet: worksheet, 
      component: e.component
  }).then(function() {
      workbook.xlsx.writeBuffer().then(function(buffer) { 
          saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Sales.xlsx"); 
      }); 
  });

  e.cancel = true; 
}

// type: 'percent|currency'
const gdpFormat = {
  type: 'currency',
  precision: 2,
};

const valueFormat = { style: 'currency', currency: 'BRL', precision: 2 };


const pageSizes = [10, 25, 50, 100];

export default function PrecoMedio() {

  const [timeStamp, setTimeStamp] = useState<string>()
  const [dt, setDt] = useState([])

  useEffect(() => {
    const f = fetch("/api/getFinCompras")
              .then((r) => r.json())
              .then((p) => setDt(p))
  }, [timeStamp])

  const selectItem = useCallback((e) => {
    e.component.byKey(e.currentSelectedRowKeys[0]).done(p => {
        console.log(p)
    });
  }, []);

  function f_atualizar() {
    setTimeStamp(Date())
  }

  function cloneIconClick(e) {
    console.log(e.row.rowIndex, e.row.data)

    // const employees = [...this.state.employees];
    // const clonedItem = { ...e.row.data, ID: service.getMaxID() };

    // employees.splice(e.row.rowIndex, 0, clonedItem);
    // this.setState({ employees });

    e.event.preventDefault();
  }

  return (
    <>
      <Box
        sx={{display:'flex', justifyContent:'space-between'}}
      >
        <Button2
          text="Atualizar"
          onClick={f_atualizar}
        />

        <span>({timeStamp})</span>

      </Box>

      <div style={{ height:"600px", padding:"0px", overflow:'auto' }}>
        <DataGrid  
          id="dataGrid"
          keyExpr="ticker"
          dataSource={dt}
          allowColumnResizing={true}
          showBorders={true}
          rowAlternationEnabled={true}
          onSelectionChanged={selectItem}
          style={{padding:"10px 0px"}}
          onExporting={exportGrid}
        >
          <Selection mode="single" />

          <SearchPanel visible={true} highlightCaseSensitive={true} />

          <Column caption='Ticker'        dataField="ticker"        dataType="string" width={80} />
          <Column caption='Dt.Compra'     dataField="dt_compra"     dataType="date"   format="dd/MM/yyyy"  width={100} />
          <Column caption='Qtd'           dataField="qtd"           dataType="number" format="#,##0"  width={80} />
          <Column caption='Vl.unitário'   dataField="vl_unitario"   dataType="number" format="###,##0.00"  width={100} />
          <Column caption='Vl.custo'      dataField="vl_custo"      dataType="number" format="###,##0.00"  width={100} />
          <Column caption='Vl.total'      dataField="vl_total"      dataType="number" format="###,##0.00"  width={100} />
          <Column caption='Dt.Liquidação' dataField="dt_liquidacao" dataType="date"   format="dd/MM/yyyy" width={110} />
          <Column caption='Corretora'     dataField="ind_corretora" dataType="string" width={80} alignment="center" />
          <Column caption='Observação'    dataField="observacao"    dataType="string" width={180} />

          <Column type="buttons" width={110}>
            <Button name="edit" />
            <Button name="delete" />
            <Button hint="Clone" icon="copy" visible={true} disabled={false} onClick={cloneIconClick} />
          </Column>

          <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} showInfo={true} />
          <Paging defaultPageSize={10} />

          <Export enabled={true} allowExportSelectedData={false} />
        </DataGrid>
      </div>
    </>
  )
}
