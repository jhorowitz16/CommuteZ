import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/clock.css';

class Clock extends Component {

  static propTypes = {
    time: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    const rawTime = new Date().toLocaleString();
    const self = this;
    this.setState({
      time: rawTime,
      formattedTime: self.formatTime(new Date().toLocaleString()),
    });
  }

  formatTime(time) {
    const date = new Date(time);
    const sol = date.toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute:'2-digit',
    });
    debugger;
    return sol;

  }

  render() {
    const self = this;
    return (
      <div className='clock'>
        <h1 className='clock__text'> { this.state.formattedTime } </h1>
        <h5 className='clock__rawtext'> { this.state.time} </h5>
      </div>
    );
  }
}

export default Clock;
