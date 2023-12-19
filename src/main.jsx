import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Shop from "./Pages/SHOP/Shop";
import "./App.css";
import Layout from "./Utils/LAYOUT/Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <Routes>
            <Route element={<Layout />}>
               <Route element={<Shop />} path="/"></Route>
            </Route>
         </Routes>
      </BrowserRouter>
   </React.StrictMode>
);
