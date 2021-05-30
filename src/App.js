import React, { Component } from 'react';
import QuoteForm from './components/QuoteForm';
import Quotes from './containers/Quotes'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />
        <QuoteForm />
        <Quotes /> 
      </div>
    );
  }
}
// const mapDispatchToProps = dispatch => {
//   return {
//     addQuote: formData => dispatch({ type: 'ADD_QUOTE', payload: formData})
//   }
//}

export default App;
