import './App.css';
import Homepage from './pages/Homepage.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {

  return (
    <Router>
      {/* <Switch> */}
        <Route path="/" component={HomePage}/>
      {/* </Switch> */}
    </Router>
  );
}

export default App;