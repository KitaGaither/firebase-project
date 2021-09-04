import React from 'react';
import { Link } from 'react-router-dom'
import FlatList from 'flatlist-react';
import firebase from 'firebase';

const myCollection = firebase.firestore().collection("myCollection");
myCollection .onSnapshot((snapshot) => {
    const data = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data(),}));
    });
const BootcampList = () => {
    return (
        <React.Fragment>
            <div className="bootcamp-list section">
                <Link to={'/bootcampdetails'}>
                    <FlatList />
                </Link>
            </div>
        </React.Fragment>
    )
}

export default BootcampList;