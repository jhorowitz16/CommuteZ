import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/dashboard.css';

const NAMES = [
  "Leaving Home",
  "At MV Caltrain",
  "At SF Caltrain",
  "At Work",
];

class Dashboard extends Component {

  static propTypes = {
  };


  constructor(props) {
    super(props);
    this.state = {
      prevClick: null
    };
  }

  shouldComponentUpdate(nextState) {
    return this.state.prevClick !== nextState.prevClick;
  }

  log(idx) {
    const self = this;
    return function() {
      console.log(idx);
      console.log(NAMES[idx]);
      self.setState({
        prevClick: NAMES[idx]
      });
    }
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
