import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import { getUTF8Length } from './countbytes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textContent: '',
      numberOfBytes: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.getBytesOfText = this.getBytesOfText.bind(this);
  }

  handleChange(event) {
    const inputText = event.target.value;
    this.setState({ textContent: inputText });
    this.getBytesOfText(inputText);
  }

  getBytesOfText(text) {
    const bytes = getUTF8Length(text);
    this.setState({ numberOfBytes: bytes });
  }

  render() {
    const centerDiv = {
      margin: '0 auto',
    }
    const styleContainer = {
      width: '30%',
      ...centerDiv
    }
    const styleArea = {
      width: '100%',
      ...centerDiv
    }
    return (
      <div className="container" style= {styleContainer}>
        <textarea value={this.state.textContent} onChange={this.handleChange} style= {styleArea} />
        <div>
          <span>Number of bytes is: {this.state.numberOfBytes}</span>
          <br />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
