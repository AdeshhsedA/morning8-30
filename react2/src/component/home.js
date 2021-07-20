import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Navbar from './navbar';
import Axios from 'axios';

function Home(){

	const [name, setName] = useState('');
	const [myname, setMyname] = useState('');
	const [contact, setContact] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function clickme(){
		alert('hi '+name);
	}

	function clickmew(x){
		alert(x);
	}

	function submitform(){
		// alert(myname+contact+email+password)
		Axios.post('http://localhost:30/insertdata',{
			Name:myname,
			Email:email,
			Password:password,
			Contact:contact
		}).then(function(succ){
			if(succ.data == true){
				alert('Data Inserted');
				getdata()
			}else{
				alert('Something went wrong');
			}
		})
	}

	const [udata, setUdata] = useState([])
	function getdata(){
		Axios.get('http://localhost:30/fetchdata').then(function(succ){
			// console.log(succ);
			setUdata(succ.data);
		})
	}

	function deletethis(x){
		Axios.post('http://localhost:30/deletedata', {id:x}).then(function(succ){
			getdata();
		})
	}

	function updatethis(x){
		window.location.href='edit/?id='+x;
	}



	useEffect(() => {
		getdata()
	}, [])



	return(
		<div>
			<Navbar />
			<h1>Welcome to Home</h1>

<div className="col-lg-3">
		<input type='text' name='' onChange={(event) => {setName(event.target.value)}} />

		<button onClick={clickme}>Click</button>

		<button onClick={() => clickmew('Hello')}>Click</button>
</div>

<div className="col-lg-3">
<div className="form-group">
<input type="text" placeholder="Fill your name"  onChange={(event) => {setMyname(event.target.value)}} className="form-control" />
</div>
<div className="form-group">
<input type="text" placeholder="Fill your email" onChange={(event) => {setEmail(event.target.value)}} className="form-control" />
</div>
<div className="form-group">
<input type="text" placeholder="Fill your password" onChange={(event) => {setPassword(event.target.value)}} className="form-control" />
</div>
<div className="form-group">
<input type="text" placeholder="Fill your contact" onChange={(event) => {setContact(event.target.value)}} className="form-control" />
</div>
<div className="from-group">
<button className="btn btn-info" onClick={submitform}>Submit</button>
</div>


</div>

<div className="col-lg-6">
		<table className="table table-bordered">
			<thead>
				<tr>
					<td>Name</td>
					<td>Email</td>
					<td>Password</td>
					<td>Contact</td>
					<td>Action</td>
				</tr>
			</thead>
			<tbody>
				{udata.map((row) => (
					<tr key={row._id}>
						<td>{row.Name}</td>
						<td>{row.Email}</td>
						<td>{row.Password}</td>
						<td>{row.Contact}</td>
						<td><button onClick={() => deletethis(row._id)} className="btn btn-danger"><span className="glyphicon glyphicon-trash"></span></button></td>
						<td><button onClick={() => updatethis(row._id)} className="btn btn-success"><span className="glyphicon glyphicon-pencil"></span></button></td>
					</tr>
				))}
			</tbody>
		</table>
</div>


		</div>
		)
}

export default Home;