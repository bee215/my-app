import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>25</td>
            <td>New York</td>
          </tr>
          <tr>
            <td>Jane</td>
            <td>30</td>
            <td>Los Angeles</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>40</td>
            <td>Chicago</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
