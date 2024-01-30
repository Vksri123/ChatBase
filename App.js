import "./App.css";
import React from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbars/Navbar";
// import Affiliates from "./Components/Pages/Affiliates";
// import Pricing from "./Components/Pages/Pricing";
// import Resources from "./Components/Pages/Resources";
import Footer from "./Components/Pages/Footer/Footer";

function App() {
  
  return (
    <div className="contain">
    <Navbar/>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Affiliates/>} />
          <Route path="/Pricing" element={<Pricing/>} />
          <Route path="/Resources" element={<Resources/>} />
        </Routes>
      </BrowserRouter> */}
      <div className="caption">
        <h1>Custom</h1>
        <h1>ChatGpt for</h1>
        <h1>your website </h1>
        <p>Build a custom GPT, embed it on your website and let it<br/>
         handle customer support, 
          lead generation, engage with your users, and more.</p>
          
      </div>
      <div className="chat">
      <h3>Build your chatbot <span aria-hidden="true">→</span></h3>
      <h2>Watch Video</h2>
         
      </div>
      <span className="card"> no credit card required</span>
      <Footer/>
      
    </div>
  );
}

export default App;
