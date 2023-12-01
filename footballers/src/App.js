// App.js
import React from "react";
import Layout from "./components/layout/Layout";
import Appbarlogin from "./components/AppbarLogin/Appbarlogin";
import FindClass from "./components/find-class";
import Locationtext from "./components/white-area/Locationtext";
import Footer from "./components/footer-area/Footer";
import Counselling from "./components/Counselling-London/Counselling";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login-page/Login";
import NoPage from "./components/NoPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/find-class" element={<FindClass />} />
        <Route path="/login" element={<Login />} />
        <Route path="/counselling" element={<Counselling/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>

      <Appbarlogin />
      <Locationtext />
      <Footer />
    </Layout>
  );
}

export default App;
