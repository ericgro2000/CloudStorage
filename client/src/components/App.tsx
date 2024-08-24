import React from "react";
import Navbar from "./navbar/Navbar";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./auth/Registration";
import Login from "./auth/Login";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="wrap">
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
