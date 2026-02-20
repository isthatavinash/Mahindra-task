import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardCard = ({ title, image, redirect }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (redirect) {
      navigate(redirect);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="group bg-white rounded-2xl 
      p-4 sm:p-6 
      flex flex-col items-center justify-center text-center
      transition-all duration-300 cursor-pointer
      shadow-md 
      
      hover:shadow-xl 
      hover:bg-red-50 
      hover:-translate-y-2
      
      active:scale-95 
      active:bg-red-50 
      active:shadow-lg
      
      border border-transparent hover:border-[#722F37]/30
      select-none"
    >
      <div className="w-24 h-24 sm:w-32 sm:h-32 mb-4 flex items-center justify-center 
      transition-transform duration-300 
      group-hover:scale-110 
      active:scale-105">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>

      <h3 className="font-semibold text-gray-700 
      text-base sm:text-lg md:text-xl 
      transition-colors duration-300
      group-hover:text-[#722F37]
      active:text-[#722F37]">
        {title}
      </h3>
    </div>
  );
};

export default DashboardCard;