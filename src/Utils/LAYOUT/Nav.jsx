import React, {useState} from "react";
import Logo from "../IMGS/Logo.png";
import {Links} from "../../Data";
import {NavLink, useNavigate} from "react-router-dom";
import usericon from "../IMGS/user.png";
import usercart from "../IMGS/bag.png";
import {Cross1Icon, HamburgerMenuIcon} from "@radix-ui/react-icons";
const Nav = () => {
   const [SSActive, setSSActive] = useState(false);
   const navigate = useNavigate();

   const handlelogoclick = () => {
      navigate("/");
      setSSActive(false);
   };
   return (
      <div className="relative">
         <div className=" h-16 flex justify-between px-3 sm:px-7 relative w-full">
            <div className=" w-[4.7rem] sm:w-[6rem] h-auto flex items-center shrink-0 cursor-pointer" onClick={handlelogoclick}>
               <img src={Logo} alt="" />
            </div>
            <div
               className={` absolute top-[3.9rem] sm:top-0 sm:static z-60 bg-white sm:bg-auto sm:z-auto w-full opacity-0 sm:opacity-100 sm:w-auto gap-5 justify-center items-center flex flex-col sm:flex-row right-0 left-0 py-8 sm:py-0 sm:translate-x-0 transition transform border-t-black border-solid border-[1px] sm:border-none navbar ${
                  SSActive ? "translate-x-0 opacity-100" : "translate-x-[-50rem]"
               }`}
            >
               {Links.map((items) => {
                  const {id, name, to} = items;
                  return (
                     <NavLink key={id} id="links" className={({isActive, isPending}) => (isActive ? "activelink" : null)} to={to} onClick={() => setSSActive(false)}>
                        {name}
                     </NavLink>
                  );
               })}
               <div className="flex justify-center items-center gap-3 relative">
                  <div className=" w-4 h-4">
                     <img src={usericon} alt="profile-icon" className=" shrink-0 w-full h-full object-cover" />
                  </div>
                  <div className=" w-4 h-4 relative">
                     <img src={usercart} alt="profile-icon" className=" shrink-0 w-full h-full object-cover" /> 
                  </div>
                  <div className="absolute w-4 h-4 border text-[60%] top-[-0.5rem] z-10 bg-red-700 left-5 rounded-full text-white items-center justify-center flex">0</div>
               </div>
            </div>
            <div className="sm:hidden flex justify-center items-center transition transform" onClick={() => setSSActive(!SSActive)}>
               {SSActive ? <Cross1Icon /> : <HamburgerMenuIcon />}
            </div>
         </div>
      </div>
   );
};

export default Nav;
