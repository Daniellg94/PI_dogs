import './App.css';
import {Route, Routes, useLocation} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Detail from './components/Details/Detail';
import Form from './components/Form/Form';
import Nav from './components/Nav/Nav';
import ButtonTM from './components/buttonTM/ButtonTM';

function App() {

  const location = useLocation()

  return (
    <div className="App">
      {location.pathname !== "/" && location.pathname !== "/Form" && <Nav/>}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/dogs' element={<Home/>}/>
        <Route path='/Form' element={<Form/>}/>
        <Route path='/dog/:id' element={<Detail/>}/>
      </Routes>
      <ButtonTM/>
    </div>
  );
}

export default App;
