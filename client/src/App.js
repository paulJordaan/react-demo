import React, { Component } from 'react';

// Components
import WatchSearch from './Components/WatchSearch';
import WatchList from './Components/WatchList';

// Styles
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      watches: [],
      loading: false
    }
  }

  _search = (query) => {

    this.setState({loading: true});

    // Build the search query
    let sq = "";
    sq += query.make !== "" ? `make=${query.make}&` : "";
    sq += query.minPrice !== 0 ? `price_gte=${query.minPrice}&` : "";
    sq += query.maxPrice !== 0 ? `price_lte=${query.maxPrice}&` : "";
    sq += query.warranty !== -1 ? `warranty=${query.warranty}&` : "";

    fetch(`http://localhost:3000/api/watches/?${sq}`)
       .then((response) => {
         return response;
       })
       .then((response) => {
         setTimeout(() => {
           this.setState({
           loading: false
         });
       }, 1000);
         return response.json();
       })
       .then((data) => {
         console.log(data);
         this.setState({watches: data});
       })
       .catch(() => {
         console.log("Error retrieving results");
       })
     };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Watch Catalog</h1>
        </header>
        <WatchSearch query={this._search}/>
        {this.state.loading &&
          <div className="container d-flex justify-content-center">
            <div className="loader">
              <div id="largeBox"></div>
              <div id="smallBox"></div>
            </div>
          </div>
        }
        {!this.state.loading &&
          <WatchList data={this.state.watches}/>
        }
      </div>
    );
  }
}

export default App;
