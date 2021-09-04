import db from './firebase';
import {useState} from 'react';

const FireStore = () => {
    const [name  , Setname] = useState("");
    const [description , Setdescription] = useState("");
    const [length , Setlength] = useState("");
    const [price , Setprice] = useState("");
    const sub = (e) => {
        e.preventDefault();
          
        // Add data to the store
        db.collection("data").add({
            Name: name,
            Description: description,
            Length: length,
            Price: price
        })
        .then((docRef) => {
            alert("Data Successfully Submitted");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
  
    return (
        <div>
           
            <center>
            <h3>Add A Bootcamp</h3>
                <form style={{marginTop:"200px" }}
                  onSubmit={(event) => {sub(event)}}>
                    <input type="text" placeholder="your name"
                      onChange={(e)=>{Setname(e.target.value)}} />
                      <br/><br/>
                    <input type="text" placeholder="description of course"
                      onChange={(e)=>{Setdescription(e.target.value)}}/>
                      <br/><br/>
                    <input type="text" placeholder="length of course"
                      onChange={(e)=>{Setlength(e.target.value)}}/>
                      <br/><br/>
                      <input type="text" placeholder="price of course"
                      onChange={(e)=>{Setprice(e.target.value)}}/>
                      <br/><br/>
                    <button type="submit">Submit</button>
                </form>
            </center>
        </div>
    );
}
  
export default FireStore;