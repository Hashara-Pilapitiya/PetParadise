import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop/Shop';
import ShopCategory from './Pages/ShopCategory/ShopCategory';
import Animal from './Pages/Animal/Animal';
import Cart from './Pages/Cart/Cart';
import LoginSignup from './Pages/LoginSignup/LoginSignup';
import Footer from './Components/Footer/Footer';
import dog_banner from './Components/Assets/dogbanner.jpg';
import cat_banner from './Components/Assets/catbanner.jpg';
import fish_banner from './Components/Assets/fishbanner.jpg';
import bird_banner from './Components/Assets/birdbanner.jpg';
import mammal_banner from './Components/Assets/mammalsbanner.jpg';
import reptile_banner from './Components/Assets/reptiliabanner.jpg';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
        <Navbar />

        <Routes>

          <Route path="/" element={<Shop />} />
          <Route path="/dogs" element={<ShopCategory banner={dog_banner} category='Dogs' />} />
          <Route path="/cats" element={<ShopCategory banner={cat_banner} category='Cats' />} />
          <Route path="/fish" element={<ShopCategory banner={fish_banner} category='Fish' />} />
          <Route path="/birds" element={<ShopCategory banner={bird_banner} category='Birds' />} />
          <Route path="/mammals" element={<ShopCategory banner={mammal_banner} category='Small Mammals' />} />
          <Route path="/reptilia" element={<ShopCategory banner={reptile_banner} category='Reptiles' />} /> 
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
