import React from 'react';
import { Link } from 'react-router-dom'
//import BootcampSummary from './bootcampSummary';

const BootcampList = () => {
    return (
        <React.Fragment>
        <div className="bootcamp-list section">

            <Link to={'/bootcampdetails'}>
            <div class="row">
              <div class="col s12 m6">
                <div class="card purple darken-3">
                  <div class="card-content white-text">
                    <span class="card-title">Bootstrap</span>
                    
                  </div>
    
                </div>
              </div>
            </div>
            </Link>

            <Link to={'/bootcampdetails'}>
            <div class="row">
              <div class="col s12 m6">
                <div class="card purple darken-3">
                  <div class="card-content white-text">
                    <span class="card-title">React</span>
                    
                  </div>
    
                </div>
              </div>
            </div>
            </Link>

            <Link to={'/bootcampdetails'}>
            <div class="row">
              <div class="col s12 m6">
                <div class="card purple darken-3">
                  <div class="card-content white-text">
                    <span class="card-title">React Native</span>
                    
                  </div>
    
                </div>
              </div>
            </div>
            </Link>

            <Link to={'/bootcampdetails'}>
            <div class="row">
              <div class="col s12 m6">
                <div class="card purple darken-3">
                  <div class="card-content white-text">
                    <span class="card-title">Node</span>
                    
                  </div>
    
                </div>
              </div>
            </div>
            </Link>
        </div>
        </React.Fragment>
    )
}

export default BootcampList;