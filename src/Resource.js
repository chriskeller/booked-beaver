import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './Resource.css'; 
import '../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'; 

export class Resourcelist extends React.Component {
    render() {
      return (
        <BootstrapTable data={ this.props.data } striped hover condensed height='120' scrollTop={ 'Bottom' }> 
            <TableHeaderColumn dataField='name' isKey>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='availability'>Available</TableHeaderColumn>
            <TableHeaderColumn dataField='id'>ID</TableHeaderColumn>
        </BootstrapTable>
      );
    }
  }
