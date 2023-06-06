import './App.css';
import {Route, Routes} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Detail from './components/Details/Detail';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/dogs' element={<Home/>}/>
        <Route path='/Form' element={<Form/>}/>
        <Route path='/dog/:id' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
