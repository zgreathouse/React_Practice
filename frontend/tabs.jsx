import React from 'react';

class Headers extends React.Component {
  render() {
    let selected = this.props.selectedPane;
    let headers = this.props.panes.map((pane, index) => {
      let title = pane.title;
      let klass = '';
      if (index === selected) {
        klass = 'active';
      }

      return (
        <li
          key={index}
          className={klass}
          onClick={this.props.onTabChosen.bind(null, index)}>
          {title}{' '}
        </li>
      );
    });
    return (
      <ul className='tab-header'>
        {headers}
      </ul>

    );
 }
}

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPane: 0
    };
    this.selectTab = this.selectTab.bind(this);
    // this.tabContentSelect = this.tabContentSelect.bind(this);
  }

  selectTab(num) {
    this.setState({selectedPane: num});
  }

  // tabContentSelect(pane){
  //   return `tab-content + ${pane}`
  // }

  render() {
    let pane = this.props.panes[this.state.selectedPane];
    console.log(this.state.selectedPane);
    console.log();

    return (
      <div className='container2'>
        <div className='tabs-flex'>
          <div className='widget-header2'>Tabs</div>
          <div className='tabs'>
            <Headers
              selectedPane={this.state.selectedPane}
              onTabChosen={this.selectTab}
              panes={this.props.panes}>
            </Headers>
            <div className={`tab-content${this.state.selectedPane}`}>
              <article>
                {pane.content}
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
