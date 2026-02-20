import React, { useState } from "react";
import configurevehicle from "../assets/configurevehicle.png";
import DashboardCard from "../components/DashboardCard";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import vehiclesuggestion from "../assets/vehiclesuggestion.png";
import products from "../assets/products.png";
import dealerLocator from "../assets/dealerlocation.png";
import comparevehicle from "../assets/container.png"
import profitcalculator from "../assets/profitcalculator.png";
import emicalculator from "../assets/emicalculator.png";
const Dashboard = () => {


  // ---------- SVG ICONS ----------
  const truckSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path d="M3 7h13v10H3z"/>
      <path d="M16 11h4l1 3v3h-5z"/>
    </svg>
  `;

  const dealerSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path d="M12 2C8 2 5 5 5 9c0 6 7 13 7 13s7-7 7-13c0-4-3-7-7-7z"/>
      <circle cx="12" cy="9" r="2"/>
    </svg>
  `;

  const compareSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path d="M8 3v18M16 3v18"/>
    </svg>
  `;

  const calculatorSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <rect x="4" y="2" width="16" height="20" rx="2"/>
      <path d="M8 6h8M8 10h2M14 10h2M8 14h2M14 14h2"/>
    </svg>
  `;

  const slides = [
  {
    image:
      "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg",
    title: "Heavy Commercial Vehicles",
  },
  {
    image:
      "https://images.pexels.com/photos/977213/pexels-photo-977213.jpeg",
    title: "Built For Performance",
  },
  {
    image:
      "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg",
    title: "Power Meets Efficiency",
  },
];
const [currentSlide, setCurrentSlide] = useState(0);

React.useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, 4000);

  return () => clearInterval(interval);
}, []);
    const [open, setOpen] = useState(false);
  return (
  <div className="min-h-screen bg-gray-100">
<Header onMenuClick={() => setOpen(true)} />
<Sidebar open={open} onClose={() => setOpen(false)} />


    {/* FULL WIDTH CONTENT */}
    <div className="w-full px-4 py-4">

      {/* ---------- HERO CAROUSEL ---------- */}
      <div className="relative rounded-2xl overflow-hidden mb-6 h-56 md:h-72 lg:h-80">

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt="Hero"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center px-6">
              <h2 className="text-white text-2xl md:text-4xl font-semibold">
                {slide.title}
              </h2>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                index === currentSlide
                  ? "bg-white scale-110"
                  : "bg-white/50"
              }`}
            />
          ))}
        </div>

      </div>

      {/* ---------- CONFIGURE CARD ---------- */}
   <div className="bg-white rounded-2xl py-4 px-3 flex items-center justify-between mb-6 transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(114,47,55,0.4)] hover:shadow-[0_20px_50px_-10px_rgba(114,47,55,0.6)]">
  
  {/* LEFT CONTENT */}
  <div className="">
    <h3 className="text-xl font-semibold text-gray-800">
      Configure Vehicle →
    </h3>
    <p className="text-gray-500 mt-2 text-sm">
      Start building your ideal commercial vehicle
    </p>
  </div>

  {/* RIGHT IMAGE */}
  <img
    src={configurevehicle}
    alt="truck"
    className="w-28 h-28 object-contain"
  />

</div>

      {/* ---------- GRID ---------- */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        <DashboardCard
          title="Products"
          redirect="/product"
    image={products}
        />
      
        <DashboardCard
          title="Vehicle Suggester"
         image={vehiclesuggestion}
        />

        <DashboardCard
         title="Dealer Locator"
           image={dealerLocator}
        />

        <DashboardCard
          title="Compare Vehicles"
          image={comparevehicle}
        />

        <DashboardCard
          title="Profit Calculator"
           image={profitcalculator}
        />

        <DashboardCard
          title="EMI Calculator"
            image={emicalculator}
        />

      </div>

    </div>
  </div>
);
};

export default Dashboard;