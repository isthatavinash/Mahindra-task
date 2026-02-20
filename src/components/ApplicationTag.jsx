import React from "react";
// MUI Outlined Imports

// MUI Outlined Imports
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";                      
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";                          
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";               
import OilBarrelSharpIcon from '@mui/icons-material/OilBarrelOutlined';                        // Barrels
                      
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";                       // Boxes
import AllInboxOutlinedIcon from "@mui/icons-material/AllInboxOutlined";                           // Parcels & Logistics
import AppleIcon from '@mui/icons-material/Apple';
import AgricultureOutlinedIcon from "@mui/icons-material/AgricultureOutlined";                     // Agriculture
import FoodBankIcon from '@mui/icons-material/FoodBankOutlined';
import EngineeringIcon from '@mui/icons-material/Engineering';
// Combined Icon Map
const iconMap = {
  construction: HandymanOutlinedIcon,
  truck: LocalShippingOutlinedIcon,
  fridge: KitchenOutlinedIcon,
fruits:AppleIcon,
  agriculture: AgricultureOutlinedIcon,
  engine: EngineeringIcon,
  barrel: OilBarrelSharpIcon,
  grains: FoodBankIcon,
  parcel: AllInboxOutlinedIcon,
  boxes: Inventory2OutlinedIcon,
  

};

const ApplicationTag = ({ type, label }) => {
  const IconComponent = iconMap[type];

  return (
    <div className="flex items-center gap-3 px-5 py-2.5 border border-[#722F37]/30 rounded-full bg-white hover:bg-red-50 hover:border-[#722F37] hover:shadow-sm transition-all cursor-pointer group">
      <div className="flex items-center justify-center">
        {IconComponent && (
          <IconComponent
            sx={{
              fontSize: 22,
              color: "#722F37",
              transition: "0.3s",
            }}
          />
        )}
      </div>

      <span className="text-gray-700 text-sm font-medium transition-colors group-hover:text-[#722F37]">
        {label}
      </span>
    </div>
  );
};

export default ApplicationTag;