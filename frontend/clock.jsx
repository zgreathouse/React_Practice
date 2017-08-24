import React from 'react';

export default class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this);
  }

  componentWillUnmount() {
    this.intervalId.clearInterval();
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  tick() {
    this.setState({time: new Date()});
  }

  render() {
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();

    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;

    return (
      <div className='container'>
        <p className='widget-header'>Clock</p>
        <div className='clock-flex'>
          <div className='clock'>
            <div className='date-time'>
              <div className='date-time-A'>Time:</div>
              <div className='date-time-B'>
                {hours}:{minutes}:{seconds} PDT
              </div>
            </div>
            <div className='date-time'>
              <div className='date-time-A'>Date:</div>
              <div className='date-time-B'>
                {this.state.time.toDateString()}
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
};
