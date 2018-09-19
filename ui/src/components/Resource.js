import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import data from './data.json';
import swaggerMiddleware from '../helpers/swaggerMiddleware';

//swaggerMiddleware = new swaggerMiddleware();

export default class Resourcelist extends React.Component {


    render() {
        
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
