import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    content: '', 
    author: ''
  }

  handleOnChange = event => {
    if (event.target.name === 'content') {
      this.setState({
        content: event.target.value
      })
    } else if (event.target.name === 'author') {
      this.setState({
        author: event.target.value
      })
    }
  }


  handleOnSubmit = event => {
    event.preventDefault()
    const quote = this.state
    this.props.addQuote(quote) 
    this.setState({
      content: '', 
      author: '' 
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form onSubmit={this.handleOnSubmit} className="form-horizontal">
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        name="content"
                        onChange={this.handleOnChange}
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        name="author" 
                        type="text"
                        onChange={this.handleOnChange}
                        value={this.state.author}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default connect(null, { addQuote })(QuoteForm);
