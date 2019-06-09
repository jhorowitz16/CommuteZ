import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/dashboard.css';
import ReactGA from 'react-ga';


const NAMES = [
  "Leaving Home",
  "At MV Caltrain",
  "At SF Caltrain",
  "At Work",
];

class Dashboard extends Component {

  constructor(props) {
    super(props);
    ReactGA.initialize('UA-128940867-3');
    this.state = {
      prevClick: null
    };
  }

  shouldComponentUpdate(nextState) {
    return this.state.prevClick !== nextState.prevClick;
  }

  log(idx) {
    this.sendGA("logTrip", NAMES[idx], new Date().toLocaleString());
    const self = this;
    return function() {
      console.log(idx);
      console.log(NAMES[idx]);
      self.setState({
        prevClick: NAMES[idx]
      });
    }
  }

  sendGA(eventCategory, eventAction, eventLabel) {
    debugger;
    ReactGA.event({
      category: eventCategory,
      action: eventAction,
      label: eventLabel
    });
  }

  render() {
    const self = this;
    return (
      <div className='dashboard'>
        <div className='dashboard__buttons'>
          {[0, 1, 2, 3].map(function(idx){
            return <div><button onClick={self.log(idx)}><span>{NAMES[idx]}</span></button></div>
          })}
        </div>

        <div className='dashboard__action'>
          { this.state.prevClick}
        </div>
      </div>
    );
  }
}

export default Dashboard;
