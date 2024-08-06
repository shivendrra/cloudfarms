import './App.css';
import Lander from './components/Lander/Lander';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' Component={() => (< Lander />)} />
          <Route exact path='/products' Component={() => (<Products />)} />
        </Routes>
      </Router>
    </>
  );
}

export default App;