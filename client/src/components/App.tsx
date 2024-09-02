import React, { useEffect } from "react";
import Navbar from "./navbar/Navbar";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "store/store";
import { useAuthMutation } from "api/auth";
import { setUser } from "store/reducers/userReducer";

const App: React.FC = () => {
  const isAuth = useAppSelector((state) => state.userReducer.isAuth);
  const dispatch = useAppDispatch();
  const [auth, { data, isLoading, isSuccess, error }] = useAuthMutation();

  useEffect(() => {
    const jwtkey = localStorage.getItem("token");
    if (jwtkey) {
      auth({ jwtkey });
    }
  }, []);

  useEffect(() => {
    console.log("m", data);
    if (data) {
      dispatch(setUser(data.user));
    }
  }, [isSuccess]);

  console.log("success", isSuccess);
  console.log("error", error);
  console.log("data", data);
  // useEffect(() => {
  //   dispatch(auth("a"));
  // }, []);
  // console.log(localStorage.getItem("token"));
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
