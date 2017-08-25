import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.selectName = this.selectName.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({inputValue: event.currentTarget.value});
  }

  matches() {
    const matches = [];
    if (this.state.inputValue.length === 0) {
      return this.props.names;
    }

    this.props.names.forEach(name => {
      let sub = name.slice(0, this.state.inputValue.length);
      if (sub.toLowerCase() === this.state.inputValue.toLowerCase()) {
        matches.push(name);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches;
  }

  selectName(event) {
    let name = event.currentTarget.innerText;
    this.setState({inputValue: name});
  }

  render() {
    let results = this.matches().map((result, i) => {
      return (
        <li key={i} onClick={this.selectName}>{result}</li>
      );
    });
    return(
      <div className='container3'>
        <div className='auto-flex'>
          <div className='widget-header3'>Autocomplete</div>
          <div className='auto'>
            <input
              onChange={this.handleInput}
              value={this.state.inputValue}
              placeholder='Choose Your Character!'/>
            <ul>
              <ReactCSSTransitionGroup
                transitionName='auto'
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}>
                {results}
              </ReactCSSTransitionGroup>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};
