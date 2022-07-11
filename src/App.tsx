import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage";

// interface Iprops {
//   component: () => any;
// }

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Route6 - component => element, inner propse - Login => <Login /> */}
        <Route path="/" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
