import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { IconButton } from "@mui/material";
import logo from "../assets/MahindraLogo.png";
import icon from "../assets/Icon.png";
const Header = ({ onMenuClick }) => {
  
  return (<header className="w-full bg-white shadow-md">
    <div className="w-full flex items-center justify-between px-4 py-3">


      <IconButton onClick={onMenuClick}> 
        
        <MenuIcon />
         </IconButton>

<img
  src={logo}
  alt="Mahindra"
  className="h-12 object-contain"
/>


      <div className="flex gap-2">
         <IconButton>
           <SearchIcon /> 
           </IconButton>
        <IconButton> 
          <img src={icon} alt="User Icon" className="h-6 w-6 object-contain" />

           </IconButton> </div>
    </div> </header>);
}; export default Header;