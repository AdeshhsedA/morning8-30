import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Navbar from './navbar';

function About(){

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	function submitform(){
		// alert(email+password)
		if(email == 'naveen@gmail.com' && password == '123456')
		{
			// alert('yes');
			localStorage.setItem('token', email);
			window.location.href='/Dashboard';
		}else{
			alert('no');
		}
	}



	return(
		<div>
			<Navbar />
			<h1>Welcome to About</h1>

		<input type="email" placeholder="Email" onChange={(event) => {setEmail(event.target.value)}} />
		<input type="password" placeholder="Password" onChange={(event) => {setPassword(event.target.value)}} />

		<input type="button" onClick={submitform} value="Submit" />


		</div>
		)
}

export default About;