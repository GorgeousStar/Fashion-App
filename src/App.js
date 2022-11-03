import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import NoPage from './Pages/NoPage/NoPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/> 
            <Route path="*" element={<NoPage/>}/> 
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
