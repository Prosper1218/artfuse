import React from "react";
import bg from "../../Utils/IMGS/bg.png";
import Btn from "../../COMPONENTS/Btn";
import img1 from "../../Utils/IMGS/img1.png";
import {useNavigate} from "react-router-dom";

const Home = () => {
   const navigate = useNavigate();
   return (
      <div>
         <div className="flex justify-center items-center">
            <div className="border w-[95%] h-[40vh] sm:h-[60vh] bg-gradient-to-r from-[#FF5C00] to-[#FF0000] bg" title="art by Melisa Maya">
               <div className=" w-full h-full items-center justify-center flex flex-col z-10 ">
                  <h2 className="hero text-3xl sm:text-4xl font-extrabold text-center px-3 whitespace-normal bg-gradient-to-r from-[#FF5C00] to-[#FF0000] bg-clip-text text-transparent">
                     Elevate Your Space
                     <br /> with handmade Treasures!
                  </h2>
                  <p className="text-center text-sm font px-3  hidden sm:block font-extrabold">
                     Indulge in the simplicity of sophistication as you explore our exclusive range of pottery pieces <br />
                     each item is a testament to the dedication of skilled artisans.
                  </p>

                  <div className="justify-center flex mt-2 sm:mt-5 ">
                     <Btn name={"Shop now"} handleclick={() => navigate("/Shop")} />
                  </div>

                  <p className="font font-bold absolute text-[70%] top-[20rem] sm:top-[24rem] lg:top-[26rem]">Mugs by Mellisa Maya</p>
               </div>
            </div>
         </div>
         {/* <div className="w-full flex justify-center flex-row  mt-8 px-4 sm:px-8">
            <div className="border w-[40%]">
               <img src={img1} alt="" className="w-full h-full" />
            </div>
            <div className="border grow">hi</div>
         </div> */}
      </div>
   );
};

export default Home;
