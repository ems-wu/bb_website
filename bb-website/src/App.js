import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact/>
      </Switch>
      <h1>Yo</h1>
    </Router>
  );
}

export default App;
