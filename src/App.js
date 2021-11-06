import './App.css';
import Home from './components/Home.js';
import InfoEvent from './components/InfoEvent.js';
import InfoUs from './components/InfoUs';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <InfoEvent/>
      <InfoUs/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
