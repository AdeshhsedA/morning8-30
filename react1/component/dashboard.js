import React from 'react';


function Dashboard(){

    var token = localStorage.getItem('token');
    if(token == null){
        window.location.href='/About';
    }

    function logout(){
        localStorage.removeItem('token');
        window.location.href='/About';
    }
	return(
		<div>
			<h1>Welcome to Dashboard</h1>
            {token}
            <button onClick={logout}>logout</button>

		</div>
		)
}

export default Dashboard;