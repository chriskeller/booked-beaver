import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import data from './data.json';

export class Resourcelist extends React.Component {
    render() {
        const products = [ {
            name: "Christian Keller",
            availability: "1",
            id: 1
          }, {
            name: "Christian Walter",
            availability: "1",
            id: 2
          }, {
            name: "William Cirillo",
            availability: "1",
            id: 3
          } ];
        const columns = [{
        dataField: 'id',
        text: 'ID',
        editable: false
        }, {
        dataField: 'name',
        text: 'Name',
        editable: false
        }, {
        dataField: 'availability',
        text: 'Availability'
        }];

        return (
            <BootstrapTable 
                keyField='id' 
                data={ data } 
                columns={ columns } 
                cellEdit={ cellEditFactory({ 
                    mode: 'click',
                    blurToSave: true, 
                    nonEditableRows: () => [0]
                }) }
                striped
                hover
                condensed
            />
        )
      }
  }
