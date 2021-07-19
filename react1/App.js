import './App.css';
import Home from './component/home';
import About from './component/about';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Dashboard from './component/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
   return (
    <div>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Dashboard" component={Dashboard} />
      </Router>
    </div>
  );
}

export default App;
