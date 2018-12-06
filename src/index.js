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
    return (
      <div>
        <textarea value={this.state.textContent} onChange={this.handleChange} />
        <div>
          <span>Number of bytes is: {this.state.numberOfBytes}</span>
          <br />
          <span>The text is: {this.state.textContent}</span>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
