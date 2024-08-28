import React from "react";
import Navbar from "./navbar/Navbar";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import { useSelector } from "react-redux";
import { useAppSelector } from "store/store";

const App: React.FC = () => {
  const isAuth = useAppSelector((state) => state.userReducer.isAuth);
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="wrap">
          {!isAuth && (
            <Routes>
              <Route path="/registration" element={<Registration />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
