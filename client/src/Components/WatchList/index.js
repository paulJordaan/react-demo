import React, { Component } from 'react';
import styles from './styles.css';

class WatchList extends Component {

  render() {

    let tableRows = (
      <tr>
        <td colSpan="5">No reults</td>
      </tr>
    )

    if(this.props.data.length) {
      tableRows = this.props.data.map((item, index) => {
        return (
          <tr key={index}>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.make}</td>
            <td>{item.price}</td>
            <td>{item.warranty}</td>
          </tr>
        )
      })
    }


    return (
      <div className="container">
      <div className="align-left">
        <h4>Results:</h4>
      </div>
      <table className="table table-bordered table-hover">
        <thead className="thead-default">
        <tr>
          <td>
            #ID
          </td>
          <td>
            Name
          </td>
          <td>
            Make
          </td>
          <td>
            Price
          </td>
          <td>
            Warranty
          </td>
        </tr>
        </thead>
        <tbody>
        {tableRows}
        </tbody>
      </table>
      </div>
    );
  }
}

export default WatchList;
