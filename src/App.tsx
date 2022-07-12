import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage";
import Register from "./pages/Register";
import HomeSection from './pages/home';

// interface Iprops {
//   component: () => any;
// }

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Route6 - component => element, inner propse - Login => <Login /> */}
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/home" element={<HomeSection />}/>
      </Routes>
    </div>
  );
}

export default App;
