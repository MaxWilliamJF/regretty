import React, { Component } from 'react';
import Header from './components/header';

class App extends Component {
  checkValue() {
    window.alert(Date.now());
  }

  render() {
    return (
      <div>
          <Header />
          <div className="crypto">
            <h3>BTC</h3>
            <h3>10k</h3>
          </div>
          <div className="card value">
            <h4>U$$</h4>
            <input placeholder="500" type="number" />
          </div>
          <div className="confirm">
            <input type="button" value="DONE" onClick={this.checkValue} />            
          </div>
      </div>
    );
  }
}

export default App;
