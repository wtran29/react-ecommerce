import { Routes, Route } from 'react-router-dom';
import Home from "./routes/home/home";
import Nav from './routes/navigation/navigation';
import SignIn from './routes/sign-in/sign-in';

const Shop = () => {
  return <h1>Shop Items</h1>
}

const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Nav />}>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='sign-in' element={<SignIn />} />
    </Route>
  </Routes>
  )
};

export default App;
