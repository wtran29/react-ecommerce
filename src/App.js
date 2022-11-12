import { Routes, Route, Outlet } from 'react-router-dom';
import Home from "./routes/home/home";

const Nav = () => {
  return (
    <div>
      <div>
        <h1>Nav bar</h1>
      </div>
      <Outlet />
    </div>
  )
}

const Shop = () => {
  return <h1>Shop Items</h1>
}

const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Nav />}>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
    </Route>
  </Routes>
  )
};

export default App;
