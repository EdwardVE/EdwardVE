import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/otro' />
        <Route path='/detail/:id'/>
        <Route path='/activities' />
      </Routes>
    </div>
  );
}

export default App;
