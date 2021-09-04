import React, { Component } from 'react';
import UpdateFireStore from './firestore';
import BootcampList from './bootcampList';
import BootcampDetails from './bootcampDetails';
import Navbar from './navbar';

class Main extends Component {
    render() {
        return(
            <React.Fragment>
                <div>
                    <UpdateFireStore />
                    <BootcampList />
                    <BootcampDetails />
                    <Navbar />
                </div>
            </React.Fragment>
        );
    }
}

export default Main;