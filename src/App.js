import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {

  return (
    
    <BrowserRouter>
      {/* <Switch> */}
      <Routes>

        <Route path="/" component={Homepage}/>
        <h1>Hello</h1>
      </Routes>
      {/* </Switch> */}
    </BrowserRouter>
  );
}

export default App;