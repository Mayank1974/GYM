import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Content from "./Components/Content";

export default function App() {
  return (
    <div className="m-0 p-0 box-border bg-gray-800 ">
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
  );
}
