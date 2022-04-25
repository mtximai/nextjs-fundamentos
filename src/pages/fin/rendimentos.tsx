import React, { useCallback, useEffect, useState } from 'react'

//import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.material.purple.light.compact.css';

import Button2 from 'devextreme-react/button';

import {
  DataGrid,
  Column,
  Selection,
  Export,
  LoadPanel,
  Button,
  Scrolling,
  Summary, TotalItem,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
  SearchPanel,
} from 'devextreme-react/data-grid';

import { Workbook } from 'exceljs';
import saveAs from 'file-saver';
import { exportDataGrid } from 'devextreme/excel_exporter';
import Box from '@mui/material/Box';

import styles from '../../styles/Estilos.module.css'

import ptMessages from 'devextreme/localization/messages/pt.json';
import { locale, loadMessages, formatMessage } from 'devextreme/localization';

//import Globalize from 'globalize';

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

const pageSizes = [10, 25, 50, 100];


export default function Rendimentos() {
  
  useEffect(() => {
    //Globalize.loadMessages(ptMessages);
    //Globalize.locale('pt');
    //loadMessages(ptMessages);
    //locale('pt')
  }, [])

  const [timeStamp, setTimeStamp] = useState<string>()
  const [dt, setDt] = useState([])

  useEffect(() => {
    const f = fetch("/api/getFinRendimentos")
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
          onSelectionChanged={selectItem}
          style={{padding:"10px 0px"}}
          onExporting={exportGrid}
          height={540}
          allowColumnResizing={true}
          showBorders={true}
          showColumnLines={true}
          showRowLines={true}
          rowAlternationEnabled={true}
        >
          <LoadPanel enabled />

          <Selection mode="single" />
          <Scrolling mode="virtual" />

          <SearchPanel visible={true} highlightCaseSensitive={true} />

          <Column caption='Ticker'   dataField="ticker" dataType="string" width={80} />
          <Column caption='Jan'      dataField="vl01"   dataType="number" format="###,##0.00"  width={80} />
          <Column caption='Fev'      dataField="vl02"   dataType="number" format="###,##0.00"  width={80} />
          <Column caption='Mar'      dataField="vl03"   dataType="number" format="###,##0.00"  width={80} />
          <Column caption='Abr'      dataField="vl04"   dataType="number" format="###,##0.00"  width={80} />
          <Column caption='Mai'      dataField="vl05"   dataType="number" format="###,##0.00"  width={80} />
          <Column caption='Jun'      dataField="vl06"   dataType="number" format="###,##0.00"  width={80} />
          <Column caption='Jul'      dataField="vl07"   dataType="number" format="###,##0.00"  width={80} />
          <Column caption='Ago'      dataField="vl08"   dataType="number" format="###,##0.00"  width={80} />
          <Column caption='Set'      dataField="vl09"   dataType="number" format="###,##0.00"  width={80} />
          <Column caption='Out'      dataField="vl10"   dataType="number" format="###,##0.00"  width={80} />
          <Column caption='Nov'      dataField="vl11"   dataType="number" format="###,##0.00"  width={80} />
          <Column caption='Dez'      dataField="vl12"   dataType="number" format="###,##0.00"  width={90} />
          <Column caption='Total'    dataField="vl_total"  dataType="number" format="###,##0.00"  width={110} />

          {/* <Column type="buttons" width={110}>
            <Button name="edit" />
            <Button name="delete" />
            <Button hint="Clone" icon="copy" visible={true} disabled={false} onClick={cloneIconClick} />
          </Column> */}

          <Summary>
            <TotalItem column="ticker" displayFormat="Total =>" />
            <TotalItem column="vl01" summaryType="sum" valueFormat="###,##0.00" displayFormat="{0}" />
            <TotalItem column="vl02" summaryType="sum" valueFormat="###,##0.00" displayFormat="{0}" />
            <TotalItem column="vl03" summaryType="sum" valueFormat="###,##0.00" displayFormat="{0}" />
            <TotalItem column="vl04" summaryType="sum" valueFormat="###,##0.00" displayFormat="{0}" />
            <TotalItem column="vl05" summaryType="sum" valueFormat="###,##0.00" displayFormat="{0}" />
            <TotalItem column="vl06" summaryType="sum" valueFormat="###,##0.00" displayFormat="{0}" />
            <TotalItem column="vl07" summaryType="sum" valueFormat="###,##0.00" displayFormat="{0}" />
            <TotalItem column="vl08" summaryType="sum" valueFormat="###,##0.00" displayFormat="{0}" />
            <TotalItem column="vl09" summaryType="sum" valueFormat="###,##0.00" displayFormat="{0}" />
            <TotalItem column="vl10" summaryType="sum" valueFormat="###,##0.00" displayFormat="{0}" />
            <TotalItem column="vl11" summaryType="sum" valueFormat="###,##0.00" displayFormat="{0}" />
            <TotalItem column="vl12" summaryType="sum" valueFormat="###,##0.00" displayFormat="{0}" />

            <TotalItem column="vl_total" summaryType="sum" valueFormat="###,##0.00" displayFormat="{0}" />
          </Summary>


          {/* <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} showInfo={true} showNavigationButtons={true} /> */}
          {/* <Paging defaultPageSize={10} /> */}


          <Export enabled={true} allowExportSelectedData={false} />
        </DataGrid>
      </div>
    </>
  )
}
