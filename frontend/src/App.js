import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop/Shop';
import ShopCategory from './Pages/ShopCategory/ShopCategory';
import Animal from './Pages/Animal/Animal';
import Cart from './Pages/Cart/Cart';
import LoginSignup from './Pages/LoginSignup/LoginSignup';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
        <Navbar />

        <Routes>

          <Route path="/" element={<Shop />} />
          <Route path="/dogs" element={<ShopCategory category='dogs' />} />
          <Route path="/cats" element={<ShopCategory category='cats' />} />
          <Route path="/fish" element={<ShopCategory category='fish' />} />
          <Route path="/birds" element={<ShopCategory category='birds' />} />
          <Route path="/mammals" element={<ShopCategory category='mammals' />} />
          <Route path="/reptilia" element={<ShopCategory category='reptilia' />} /> 
          <Route path='/animal' element={<Animal /> } >
            <Route path=':animalId' element={<Animal />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />           

        </Routes>

        <Footer />

      </BrowserRouter> 

        
      
    </div>
  );
}

export default App;
