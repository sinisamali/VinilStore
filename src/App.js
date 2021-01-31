import './App.css';
import Nav1 from './components/Nav1/Nav1';
import Nav from './components/Navbar/Nav';
import Slideshow from './components/Slideshow/Slideshow';
import CardArea from './components/CardArea/CardArea'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav1 />
      <Nav />
      <Slideshow />
      <CardArea />
      <Footer />
    </div>
  );
}

export default App;
