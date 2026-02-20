import React, { useState } from "react";
import Header from "../components/Header";
import ApplicationTag from "../components/ApplicationTag";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import productdetail from "../assets/productdetail.png";
const ProductDetail = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const [openSection, setOpenSection] = useState("performance");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className=" bg-white">

        {/* ---------- TABS ---------- */}
        <div className="flex justify-around border-b text-sm font-medium">
          {["overview", "specs", "applications", "config"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 capitalize ${
                activeTab === tab
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-500"
              }`}
            >
              {tab === "specs"
                ? "Key Specifications"
                : tab === "config"
                ? "Config"
                : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* ---------- CONTENT WRAPPER ---------- */}
        <div className="flex flex-col lg:flex-row gap-8 p-6 bg-gray-50">

          {/* LEFT SIDE - IMAGE */}
          <div className="lg:w-1/2 ">
            <img
              src={productdetail}
              alt="Truck"
              className="w-full object-contain"
            />
          </div>

          {/* RIGHT SIDE - PRODUCT INFO */}
          <div className="lg:w-1/2">

            <div className="bg-white rounded-xl shadow p-6 text-center">
              <div className="flex items-center justify-center gap-4 mb-2">
                <div className="w-8 h-[2px] bg-primary"></div>
                <h2 className="text-lg font-semibold">
                  Blazo X 28 BS6
                </h2>
                <div className="w-8 h-[2px] bg-primary"></div>
              </div>

              <p className="text-lg font-bold">
                ₹ 4.39 - ₹ 5.34 Lakh*
              </p>

              <div className="flex justify-center gap-2 mt-3 text-xs">
                <span className="bg-gray-200 px-3 py-1 rounded-full">
                  11.8 kWh
                </span>
                <span className="bg-gray-200 px-3 py-1 rounded-full">
                  725 kg
                </span>
                <span className="bg-gray-200 px-3 py-1 rounded-full">
                  Electric
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ---------- KEY SPECIFICATIONS ---------- */}
        <div className="px-6 pb-8 text-left">
          <h3 className="text-[#722F37] font-bold text-lg mb-4 text-left">
  Key Specifications
</h3>

          {/* Reusable Section Component */}
          {[
            {
              key: "performance",
              title: "Performance",
              content: [
                { label: "Fuel Type", value: "Diesel" },
                { label: "Engine Type", value: "NA" },
                { label: "Fuel Tank (Litres)", value: "26" },
                { label: "Max Torque", value: "48 Nm" },
              ],
            },
            {
              key: "dimensions",
              title: "Dimensions",
              content: [
                { label: "Length", value: "7500 mm" },
                { label: "Width", value: "2500 mm" },
                { label: "Height", value: "3200 mm" },
                { label: "Wheelbase", value: "4500 mm" },
              ],
            },
            {
              key: "brakes",
              title: "Brakes & Suspension",
              content: [
                { label: "Front Brake", value: "Air Brakes" },
                { label: "Rear Brake", value: "Air Brakes" },
                { label: "Front Suspension", value: "Parabolic Leaf" },
                { label: "Rear Suspension", value: "Semi Elliptical" },
              ],
            },
            {
              key: "transmission",
              title: "Transmission",
              content: [
                { label: "Gearbox", value: "6-Speed Manual" },
                { label: "Clutch", value: "Single Plate" },
                { label: "Drive Type", value: "RWD" },
              ],
            },
          ].map((section) => (
            <div key={section.key} className="border-b py-4">

              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection(section.key)}
              >
                <h4 className="font-medium text-gray-800">
                  {section.title}
                </h4>
                {openSection === section.key ? (
                  <RemoveIcon />
                ) : (
                  <AddIcon />
                )}
              </div>

              {openSection === section.key && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {section.content.map((item, index) => (
                    <div key={index}>
                      <p className="text-gray-500 text-sm">
                        {item.label}
                      </p>
                      <div className="border rounded-md p-3 mt-1 font-medium bg-gray-50">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>

        {/* ---------- APPLICATIONS ---------- */}
        <div className="px-6 pb-10">
             <h3 className="text-[#722F37] font-bold text-lg mb-4 text-left">
            Applications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ApplicationTag type="construction" label="Construction Material" />
            <ApplicationTag type="engine" label="Engineering Goods" />
            <ApplicationTag type="fridge" label="Refrigeration" />
            <ApplicationTag type="truck" label="Tanker" />
            <ApplicationTag type="barrel" label="Barrels" />
            <ApplicationTag type="fruits" label="Fruits and Vegetables" />
            <ApplicationTag type="grains" label="Food Grains" />
            <ApplicationTag type="boxes" label="Boxes" />
            <ApplicationTag type="parcel" label="Parcels & Logistics" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;