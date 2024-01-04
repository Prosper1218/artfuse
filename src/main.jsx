import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Shop from "./Pages/SHOP/Shop";
import "./App.css";
import Layout from "./Utils/LAYOUT/Layout";
import Home from "./Pages/HOME/Home";
import About from "./Pages/ABOUT/About";
import Contact from "./Pages/CONTACT/Contact";
import ShopContext from "./Utils/ShopContext";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
     <ShopContext>
         <BrowserRouter>
            <Routes>
               <Route element={<Layout />}>
                  <Route element={<Home />} path="/"></Route>
                  <Route element={<Shop />} path="/Shop"></Route>
                  <Route element={<About />} path="/About"></Route>
                  <Route element={<Contact />} path="/Contact"></Route>
               </Route>
            </Routes>
         </BrowserRouter>
     </ShopContext>
   </React.StrictMode>
);
