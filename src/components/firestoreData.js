// Import Firestore database
import db from './firebase';
import { useState } from 'react';
//import './read.css';

const FirestoreData = () => {

	const [info , setInfo] = useState([]);

	// Start the fetch operation as soon as
	// the page loads
	window.addEventListener('load', () => {
		Fetchdata();
	});

	// Fetch the required data using the get() method
	const Fetchdata = ()=>{
		db.collection("data").get().then((querySnapshot) => {
			
			// Loop through the data and store
			// it in array to display
			querySnapshot.forEach(element => {
				var data = element.data();
				setInfo(arr => [...arr , data]);
				
			});
		})
	}
	
	// Display the result on the page
	return (
		<div>
			<center>
			<h3>New Bootcamp</h3>
			</center>
		
		{
			info.map((data) => (
			<Frame name={data.Name}
				description={data.Description}
				length={data.Length}
                price={data.Price}/>
			))
		}
		</div>

	);
}

// Define how each display entry will be structured
const Frame = ({name , description , length, price}) => {
	console.log(name + " " + description + " " + length + " " + price);
	return (
       
		<center>
			<div className="div">
                
				
                <p>NAME : {name}</p>

                                
                <p>Description : {description}</p>

                                
                <p>Length : {length}</p>


                <p>Price : {price}</p>
                
			</div>
		</center>
	);
}

export default FirestoreData;
