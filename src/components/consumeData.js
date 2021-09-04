import './App.css';
import db from './firebase.config';
import React,{useState,useEffect} from 'react';

function App() {
  const [bootcamps, setbootcamps]=useState([])
  const fetchbootcamps=async()=>{
    const response=db.collection('bootcamps');
    const data=await response.get();
    data.docs.forEach(item=>{
     setbootcamps([...bootcamps, item.data()])
    })
  }
  useEffect(() => {
    fetchbootcamps();
  }, [])
  return (
    <div className="App">
      {
        bootcamps && bootcamps.map(bootcamp=>{
          return(
            <div className="bootcamp-container">
              <h4>{bootcamp.title}</h4>
              <p>{bootcamp.body}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
