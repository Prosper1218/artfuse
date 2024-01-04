import React, {useEffect} from "react";
import {useShopProvider} from "../../Utils/ShopContext";
import Product from "./Product";

const Shop = () => {
   const {state, Loading, setLoading} = useShopProvider();

   

   return (
      <div className="pb-8">
         <h1 className="font text-3xl text-center mt-8 font-thin">Shop</h1>
         <br />
         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 px-3 sm:px-8 gap-4 w-full md:px-8 xl:px-20 xl:gap-12 transition">
            {state.Product.map((item) => {
               return <Product items={item} key={item.id} />;
            })}
         </div>
      </div>
   );
};

export default Shop;
