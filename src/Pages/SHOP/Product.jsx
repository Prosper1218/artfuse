import {PlusIcon} from "@radix-ui/react-icons";
import React from "react";

const Product = ({items}) => {
   const {id, name, price, description, imgsrc} = items;
   return (
      <div className=" shadow-lg flex flex-col relative py-2 px-2" >
         <div className=" h-full w-full justify-center flex relative ">
            <img src={imgsrc} alt={name} className="h-full w-full xl:w-[92%] xl:h-[90%] object-cover imge" />
         </div>
         <div className="justify-between flex-col sm:flex-row flex items-center lg:px-4 py-2">
            <p className="font text-xs capitalize">{name}</p>
            <p className="font text-lg bold capitalize">${price}</p>
         </div>
         <section className=" h-full w-full flex justify-end flex-row xl:px-3">
            <button className="bg-black w-full sm:w-24 h-7 rounded-sm text-white text-[60%] sm:text-xs text-center font capitalize p-1 atc hover:shadow-xl transition">add to cart</button>
         </section>
      </div>
   );
};

export default Product;
{
   /* <PlusIcon className="text-white scale-125 text-bolder" onClick={() => alert("hi")} /> */
}
