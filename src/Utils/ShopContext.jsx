import React, {createContext, useContext, useEffect, useReducer, useState} from "react";
import {Products} from "../Data";
//
const initialstate = {
   Product: Products,
};
const reducer = (state, action) => {};

//
export const ShopC = createContext();
const ShopContext = ({children}) => {
   const [state, dispatch] = useReducer(reducer, initialstate);
   const [Loading, setLoading] = useState(true);
   useEffect(() => {
      setLoading(false);
   }, []);

   const contextData = {state,};
   return (
      <div>
         <ShopC.Provider value={contextData}>{Loading ? <p>loading...</p> : children}</ShopC.Provider>
      </div>
   );
};
export const useShopProvider = () => {
   return useContext(ShopC);
};

export default ShopContext;
