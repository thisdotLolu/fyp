import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Traversing from './pages/Traversing/Traversing';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/traversing' element={<Traversing/>}/>
      </Routes>
    </div>
  );
}

export default App;
