import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import PizzasMainWrapper from './components/PizzasMainWrapper/PizzasMainWrapper';
import CartMainWrapper from './components/CartMainWrapper/CartMainWrapper';
import InfoMainWrapper from './components/InfoMainWrapper/InfroMainWrapper';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path='pizzas' element={<PizzasMainWrapper />}></Route>
              <Route path='cart' element={<CartMainWrapper/>}></Route>
              <Route path='info' element={<InfoMainWrapper/>}></Route>
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
