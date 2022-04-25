import React from 'react'

import Form, {
  SimpleItem,
  GroupItem,
  Label,
} from 'devextreme-react/form';

import 'devextreme-react/text-area';

import styles from '../../styles/formDX.module.css'

export const employee = {
  ID: 1,
  FirstName: 'John',
  LastName: 'Heart',
  Position: 'CEO',
  BirthDate: '1964/03/16',
  HireDate: '1995/01/15',
  Notes: 'John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.',
  Address: '351 S Hill St.',
  City: 'Los Angeles',
  State: 'CA',
  ZipCode: '90013',
  Home: '555-684-1334',
  Mobile: '555-684-1335',
  Email: 'jheart@dx-email.com',
  Skype: 'jheart_DX_skype',
};


function avatarRender() {
  return (
    <div className={styles.formAvatar}></div>
  );
}

const birthDateOptions = { width: '100%' }

export default function FormDX() {
  return (
    <div>
      <div>FormDX</div>

      <Form formData={employee}>
  
        {/* Dados pessoais  */}
        <GroupItem cssClass={styles.firstGroup} colCount={4}>
          <SimpleItem render={avatarRender}>
          </SimpleItem>

          <GroupItem colSpan={3}>
            <SimpleItem dataField="FirstName" />
            <SimpleItem dataField="LastName" />
            <SimpleItem
              dataField="BirthDate"
              editorType="dxDateBox"
              editorOptions={birthDateOptions}
            />
          </GroupItem>
        </GroupItem>

        {/* Outros dados */}
        <GroupItem cssClass="second-group" colCount={2}>

          {/* Coluna 1 */}
          <GroupItem>
            <SimpleItem dataField="Address" />
            <SimpleItem dataField="City" />
            <SimpleItem dataField="Position"
              editorType="dxSelectBox"
              // editorOptions={this.positionOptions}
            />
          </GroupItem>

          {/* Coluna 2 */}
          <GroupItem>
            <SimpleItem
              dataField="State"
              editorType="dxSelectBox"
              // editorOptions={this.stateOptions}
            />

            <SimpleItem dataField="ZipCode" />

            <SimpleItem
              dataField="Mobile"
              // editorOptions={this.phoneOptions}
            >
              <Label text="Phone" />
            </SimpleItem>
          </GroupItem>

          <SimpleItem
            colSpan={2}
            dataField="Notes"
            editorType="dxTextArea"
            // editorOptions={this.notesOptions}
          />
        </GroupItem>

      </Form>

    </div>
  )
}
