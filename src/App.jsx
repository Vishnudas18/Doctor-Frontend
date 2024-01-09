import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';
import ViewRest from './Components/ViewRest';
import AllRest from './Components/AllRest';

function App() {
  return (
    <div className="App">
      <header>
      <Header/>
      </header>
      <section>
        <Routes>
        <Route path='/' element={<AllRest/>}/>
          <Route path='/view/:id' element={<ViewRest/>}/>
          

        </Routes>
      </section>
      <Footer/>
     
      
    </div>
  );
}

export default App;
