import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';


function App() {
  return (
    <div className="app-page__bg-container">
      {/* <BrowserRouter>
        <Header/>
        <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
      </BrowserRouter> */}

      <Header/>
      <About/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
