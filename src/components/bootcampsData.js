// Import Firestore database
import db from './firebase';
import { useState } from 'react';
//import './read.css';

const BootcampsData = () => {

	const [bootcamps , setbootcamps] = useState([]);

	// Start the fetch operation as soon as
	// the page loads
	window.addEventListener('load', () => {
		Fetchbootcamps();
	});

	// Fetch the required data using the get() method
	const Fetchbootcamps = ()=>{
		db.collection("bootcamps").get().then((querySnapshot) => {
			
			// Loop through the data and store
			// it in array to display
			querySnapshot.forEach(element => {
				var bootcamps = element.bootcamps();
				setInfo(arr => [...arr , bootcamps]);
				
			});
		})
	}
	
	// Display the result on the page
	return (
		<div>
			<center>
			<h2>New Bootcamp You Added</h2>
			</center>
		
		{
			info.map((bootcamps) => (
			<Frame name={bootcamps.Name}
				description={bootcamps.Description}
				length={bootcamps.Length}
                price={bootcamps.Price}/>
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

export default BootcampsData;
