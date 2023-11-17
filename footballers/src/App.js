// App.js
import React from "react";
import Layout from "./components/layout/Layout";
import Appbarlogin from "./components/AppbarLogin/Appbarlogin";
import FindClass from "./components/find-class";
import Locationtext from "./components/white-area/Locationtext";
import Footer from "./components/footer-area/Footer";
import Counselling from "./components/Counselling-London/Counselling";

function App() {
  return (
    <Layout>
      <Appbarlogin />
      {/* <FindClass/> */}
      <Counselling/>
      <Locationtext/>
      <Footer />
    </Layout>
  );
}

export default App;
