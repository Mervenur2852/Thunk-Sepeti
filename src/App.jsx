import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getRestaurants } from "./redux/actions/restaurantActions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import { getCart } from "./redux/actions/basketAction";

const App = () => {
  // dispatch kurulumu yap
  const dispatch = useDispatch();

  // sayfa yüklendiğinde thunk fonk. ile api a istek at ve gelen verileri
  // reducer a ilet
  useEffect(() => {
    // restaurant verilerini alan fonksiyon
    dispatch(getRestaurants());

    // cart verilerini alan fonksiyon
    dispatch(getCart());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
