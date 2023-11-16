// App.js
import React from "react";
import "./App.css";
import Appbarlogin from "./components/AppbarLogin/Appbarlogin";
import Layout from "./components/layout/Layout";
import Appbar from "./components/Appbar.js/Appbar";
import Test from "./components/Test";

function App() {
  return (
    <div>
      <Layout>
        <Appbarlogin />
        <Test />
      </Layout>
    </div>
  );
}

export default App;
