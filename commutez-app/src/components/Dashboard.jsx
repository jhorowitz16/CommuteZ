import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/dashboard.css';

class Dashboard extends Component {

  static propTypes = {
  };

  render() {
    return (
      <div className='dashboard'>
        <div className='dashboard__buttons'>
          <div><button><span>Leaving Home</span></button></div>
          <div><button><span>At MV Caltrain</span></button></div>
          <div><button><span>At SF Caltrain</span></button></div>
          <div><button><span>At Work</span></button></div>
        </div>

        <div className='dashboard__action'>
          No action
        </div>


      </div>
    );
  }
}

export default Dashboard;
