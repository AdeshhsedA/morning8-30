import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Navbar from './navbar';
import Axios from 'axios';

function Home(){

    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var id = urlParams.get('id');

	const [myname, setMyname] = useState('');
	const [contact, setContact] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function submitform(){
		// alert(myname+contact+email+password)
		Axios.post('http://localhost:30/updatedata',{
            id:id,
			Name:myname,
			Email:email,
			Password:password,
			Contact:contact
		}).then(function(succ){
			if(succ.data == true){
				alert('Data Updated');
				getdata()
			}else{
				alert('Something went wrong');
			}
		})
	}

	const [udata, setUdata] = useState([])
	function getdata(){
		Axios.post('http://localhost:30/fetchdatas', {id:id}).then(function(succ){
			// console.log(succ);
			// setUdata(succ.data);
            setMyname(succ.data.Name)
            setContact(succ.data.Contact)
            setEmail(succ.data.Email)
            setPassword(succ.data.Password)
		})
	}



	useEffect(() => {
		getdata()
	}, [])



	return(
		<div>
			<Navbar />
			<h1 className='text-center'>Edit</h1>

<div className="col-lg-4 col-lg-offset-4">
<div className="form-group">
<input type="text" placeholder="Fill your name" value={myname} onChange={(event) => {setMyname(event.target.value)}} className="form-control" />
</div>
<div className="form-group">
<input type="text" placeholder="Fill your email" value={email} onChange={(event) => {setEmail(event.target.value)}} className="form-control" />
</div>
<div className="form-group">
<input type="text" placeholder="Fill your password" value={password} onChange={(event) => {setPassword(event.target.value)}} className="form-control" />
</div>
<div className="form-group">
<input type="text" placeholder="Fill your contact" value={contact} onChange={(event) => {setContact(event.target.value)}} className="form-control" />
</div>
<div className="from-group">
<button className="btn btn-info" onClick={submitform}>Submit</button>
</div>


</div>


		</div>
		)
}

export default Home;