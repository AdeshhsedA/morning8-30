import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Navbar from './navbar';

function Home(){

	const [name, setName] = useState('');

	function clickme(){
		alert('hi '+name);
	}

	function clickmew(x){
		alert(x);
	}

	return(
		<div>
			<Navbar />
			<h1>Welcome to Home</h1>


		<input type='text' name='' onChange={(event) => {setName(event.target.value)}} />

		<button onClick={clickme}>Click</button>

		<button onClick={() => clickmew('Hello')}>Click</button>

		</div>
		)
}

export default Home;