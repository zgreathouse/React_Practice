import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';



const Panes = [
  {title: 'Mugen', content: ""},
  {title: 'Jin', content: ""},
  {title: 'Fuu', content: ""}
];

class Root extends React.Component {
  render() {
    return(
      <div>
        <Clock />
        <div className='interactive'>
          <Tabs panes={Panes} />
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
