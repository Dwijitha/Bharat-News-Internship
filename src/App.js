import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./components/Home";
import UserInfo from "./components/UserInfo";
import PublishedArticles from "./components/PublishedArticles";
import Bookmarks from "./components/Bookmarks";
import Settings from "./components/Settings";

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user-info" element={<UserInfo />} />
        <Route path="/published-articles" element={<PublishedArticles />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
