import './App.css';
import {Route, Routes, useLocation} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Detail from './components/Details/Detail';
import Form from './components/Form/Form';
import Nav from './components/Nav/Nav';
import ButtonTM from './components/buttonTM/ButtonTM';
import Edith from './components/Edith/Edith';
import AudioPlayer from './components/Audio/AudioPlayer';

function App() {

  const location = useLocation()

  return (
    <div className="App">
      {location.pathname !== "/" && location.pathname !== "/Form"  && <Nav />}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/dogs' element={<Home/>}/>
        <Route path='/Form' element={<Form/>}/>
        <Route path='/dog/:id' element={<Detail/>}/>
        <Route path='/dog/:id/:id' element={<Edith/>}/>
      </Routes>
      <ButtonTM/>
      <AudioPlayer/>
    </div>
  );
}

export default App;
