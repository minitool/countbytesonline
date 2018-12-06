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
  }

  handleChange(event) {
    this.setState({ textContent: event.target.value });
    this.setState({ numberOfBytes: getUTF8Length(this.state.textContent) });
  }

  render() {
    return (
      <div>
        <textarea value={this.state.value} onChange={this.handleChange} />
        <div>
          <span>Number of bytes is: {this.state.numberOfBytes}</span>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
