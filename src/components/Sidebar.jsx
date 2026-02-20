import React, { useState } from "react";
import { Drawer ,IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close'; 
import { useNavigate } from "react-router-dom";
import footerlogo from '../assets/footerlogon.png';
import sidebarlogo from '../assets/sidebarlogo.png';

const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("Dashboard");

  // ---------- SVG ICONS ----------
  const icons = {
    dashboard: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M3 10.5L12 3l9 7.5"/>
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M5 10v9h5v-6h4v6h5v-9"/>
      </svg>
    `,
    products: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path d="M3 7h13v10H3z"/>
        <path d="M16 11h4l1 3v3h-5z"/>
      </svg>
    `,
    location: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path d="M12 2C8 2 5 5 5 9c0 6 7 13 7 13s7-7 7-13c0-4-3-7-7-7z"/>
        <circle cx="12" cy="9" r="2"/>
      </svg>
    `,
    compare: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path d="M8 3v18M16 3v18"/>
      </svg>
    `,
    calculator: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <rect x="4" y="2" width="16" height="20" rx="2"/>
      </svg>
    `,
    logout: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
        <polyline points="16 17 21 12 16 7"/>
        <line x1="21" y1="12" x2="9" y2="12"/>
      </svg>
    `
  };

  // ---------- RIGHT ARROW ----------
  const arrowSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round"
      d="M9 5l7 7-7 7"/>
    </svg>
  `;

  const menuItems = [
    { name: "Dashboard", path: "/", icon: icons.dashboard },
    { name: "Products", path: "/product", icon: icons.products },
    { name: "Configure Vehicle", path: "#", icon: icons.products },
    { name: "Vehicle Suggester", path: "#", icon: icons.products },
    { name: "Dealer Locator", path: "#", icon: icons.location },
    { name: "Compare Vehicles", path: "#", icon: icons.compare },
    { name: "Profit Calculator", path: "#", icon: icons.calculator },
    { name: "EMI Calculator", path: "#", icon: icons.calculator },
    { name: "Logout", path: "#", icon: icons.logout }
  ];

  const handleClick = (item) => {
    setActiveItem(item.name);

    if (item.path !== "#") {
      navigate(item.path);
      onClose();
    }
  };

  return (
    <Drawer anchor="left"
    
    open={open} onClose={onClose}>
      <div className="w-64 flex flex-col justify-between h-full bg-white">

        {/* HEADER */}
        <div>
          <div className="bg-red-600 text-white p-5 flex items-center gap-3">
             <IconButton 
              onClick={onClose} 
              sx={{ color: 'white', padding: 0 }}
            >
              <CloseIcon />
            </IconButton>
            <img
              src={sidebarlogo}
                  className="h-30 w-30 object-contain"
              alt="Mahindra Logo"
            />
          
          </div>

          {/* MENU */}
          <div className="mt-4">
            {menuItems.map((item) => {
              const isActive = activeItem === item.name;

              return (
                <div
                  key={item.name}
                  onClick={() => handleClick(item)}
                  className={`flex items-center justify-between px-5 py-3 cursor-pointer transition-all duration-300
                  ${
                    isActive
                      ? "bg-red-50 text-red-600"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {/* Left Side */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 ${
                        isActive ? "text-red-600" : "text-gray-500"
                      }`}
                      dangerouslySetInnerHTML={{ __html: item.icon }}
                    />
                    <span className={`${isActive ? "font-semibold" : ""}`}>
                      {item.name}
                    </span>
                  </div>

                  {/* Right Arrow */}
                  {isActive && (
                    <div
                      className="w-4 h-4 text-red-600"
                      dangerouslySetInnerHTML={{ __html: arrowSVG }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* FOOTER */}
        <div className="p-5 border-t">
         <img
         src={footerlogo}
          alt="Mahindra"
          className="h-30 w-30 object-contain"
         />
        </div>

      </div>
    </Drawer>
  );
};

export default Sidebar;
