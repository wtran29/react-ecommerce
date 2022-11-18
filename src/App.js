import { Routes, Route } from 'react-router-dom';
import Home from "./routes/home/home";
import Nav from './routes/navigation/navigation';
import Authentication from './routes/authentication/authentication';
import Shop from './routes/shop/shop';
import CheckOut from './routes/checkout/checkout';


const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Nav />}>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='auth' element={<Authentication />} />
      <Route path='checkout' element={<CheckOut />} />
    </Route>
  </Routes>
  )
};

export default App;
