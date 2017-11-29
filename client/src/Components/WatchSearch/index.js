import React, { Component } from 'react';

import styles from './styles.css';

class WatchSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      make: "",
      minPrice: 0,
      maxPrice: 0,
      warranty: -1,
    }
  }

  _updateSearch = () => {
    this.props.query(this.state);
  }

  _onMakeChange = (e) => {
    let make = e.target.value

    if(make === 'all') {
      this.setState({make: ''}, () => {
        this._updateSearch();
      });
    } else {
      this.setState({make}, () => {
        this._updateSearch();
      });
    }
  }

  _onWarrantyChange = (e) => {
    let warranty = e.target.value

    if(warranty === '-1') {
      this.setState({warranty: ''}, () => {
        this._updateSearch();
      });
    } else {
      this.setState({warranty}, () => {
        this._updateSearch();
      });
    }
  }

  _onMinPriceChange = (e) => {
    let minPrice = e.target.value

    if(minPrice >= 0) {
      this.setState({minPrice}, () => {
        this._updateSearch();
      });
    }
  }

  _onMaxPriceChange = (e) => {
    let maxPrice = e.target.value

    if(maxPrice >= 0) {
      this.setState({maxPrice}, () => {
        this._updateSearch();
      });
    }
  }

  render() {
    return (
      <div className="container">
      <form>
        <div className="form-row">
          <div className="form-group col">
            <label htmlFor="inputMake">Make</label>
            <select id="inputMake" className="form-control" onChange={this._onMakeChange} defaultValue="default">
              <option disabled="disabled" value="default" hidden="hidden">-- Search by make --</option>
              <option value="all">All Makes</option>
              <option value="Swatch">Swatch</option>
              <option value="Rolex">Rolex</option>
            </select>
          </div>
          <div className="form-group col">
            <label htmlFor="inputPriceMin">Price Min</label>
            <input type="number" className="form-control" id="inputPriceMin" onChange={this._onMinPriceChange} value={this.state.minPrice} min="0"/>
          </div>
          <div className="form-group col">
            <label htmlFor="inputPriceMax">Price Max</label>
            <input type="number" className="form-control" id="inputPriceMax" onChange={this._onMaxPriceChange} value={this.state.maxPrice} min="0"/>
          </div>
          <div className="form-group col">
            <label htmlFor="inputWarranty">Warranty (yr)</label>
            <select id="inputWarranty" className="form-control" onChange={this._onWarrantyChange} defaultValue="default">
              <option disabled="disabled" value="default" hidden="hidden">-- Search by warranty --</option>
              <option value="-1">Any</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
      </form>
      </div>
    );
  }
}

export default WatchSearch;
