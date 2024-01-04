import React from "react";

const Btn = ({name, handleclick}) => {
   return (
      <div>
         <button
            className="bg-gradient-to-r from-[#FF5C00] to-[#FF0000] text-[65%] sm:text-[80%] w-20 h-9 text-white font outline-none border-none items-center text-center rounded-sm"
            onClick={handleclick}
         >
            {name}
         </button>
      </div>
   );
};

export default Btn;
