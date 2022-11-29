import { createContext, useEffect, useState, useReducer } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChangedListener, createUserDocFromAuth } from "./utils/firebase/firebase";
import { Routes, Route, Form } from 'react-router-dom';
import Home from "./routes/home/home";
import Nav from './routes/navigation/navigation';
import Authentication from './routes/authentication/authentication';
import Shop from './routes/shop/shop';
import CheckOut from './routes/checkout/checkout';
import { setCurrentUser } from "./store/user/user-action";


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if(user){
            createUserDocFromAuth(user);
        }
        dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
  <Routes>
    <Route path='/' element={<Nav />}>
      <Route index element={<Home />} />
      <Route path='shop/*' element={<Shop />} />
      <Route path='auth' element={<Authentication />} />
      <Route path='checkout' element={<CheckOut />} />
    </Route>
  </Routes>
  )
};

export default App;
