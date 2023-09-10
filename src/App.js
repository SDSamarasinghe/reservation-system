import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import Trains from "./components/Trains/Trains";
import Login from "./components/User/Login";
import Logout from "./components/User/Logout";
import { useDispatch } from "react-redux";
import { check } from "./actions/user";
import Cookies from "js-cookie";
import Profile from "./components/Profile/Profile";
import Signup from "./components/User/Signup";
import Admin from "./components/Admin/Admin";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  const token = Cookies.get("token");
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(check());
    } else {
      console.log("You are not logged in");
    }
  }, [token, dispatch]); // Added dependencies to the array

  return (
    <BrowserRouter>
      {/* Navbar */}
      <Navbar />

      <Routes>
        {/* Train List */}
        <Route exact path="/" element={<Trains />} />

        <Route exact path="/login" element={<Login />} />

        <Route exact path="/logout" element={<Logout />} />

        <Route exact path="/signup" element={<Signup />} />

        <Route exact path="/admin" element={<Admin />} />

        <Route exact path="/profile" element={<Profile />} />

        <Route path="*" element={<NotFound />} /> Added a path
      </Routes>
    </BrowserRouter>
  );
};

export default App;
