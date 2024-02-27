import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <header>
      {/* Desktop and Tablet */}
      <div className="flex justify-center gap-10 items-center">
        <Link to="/dashboard">
          <div className="flex items-center gap-2 text-lg hover:text-purpleColor cursor-pointer">
            <span className="text-purpleColor"></span>
            Dashboard
          </div>
        </Link>
        <Link to="/doctor">
          <div className="flex items-center gap-2 text-lg hover:text-purpleColor cursor-pointer">
            <span className="text-purpleColor"></span>
            Doctor
          </div>
        </Link>{" "}
        <Link to="/pharmacy">
          <div className="flex items-center gap-2 text-lg hover:text-purpleColor cursor-pointer">
            <span className="text-purpleColor"></span>
            Pharmacy
          </div>
        </Link>
        <Link to="/distributor">
          <div className="flex items-center gap-2 text-lg hover:text-purpleColor cursor-pointer">
            <span className="text-purpleColor"></span>
            Distributor
          </div>
        </Link>
        <Link to="/manufacturer">
          <div className="flex items-center gap-2 text-lg hover:text-purpleColor cursor-pointer">
            <span className="text-purpleColor"></span>
            Manufacturer
          </div>
        </Link>{" "}
        <Link to="/stocklist">
          <div className="flex items-center gap-2 text-lg hover:text-purpleColor cursor-pointer">
            <span className="text-purpleColor"></span>
            Stock List
          </div>
        </Link>{" "}
        <Link to="/supplier">
          <div className="flex items-center gap-2 text-lg hover:text-purpleColor cursor-pointer">
            <span className="text-purpleColor"></span>
            Supplier
          </div>
        </Link>
        <div className="flex gap-6">
          <Link to="/admindashboard">
            <p className="p-3 rounded text-lg hover:text-purpleColor cursor-pointer">
              Admin Dashboard
            </p>
          </Link>
        </div>
        <div className="flex gap-6">
          <Link to="/doctordashboard">
            <p className="p-3 rounded text-lg hover:text-purpleColor cursor-pointer">
              Doctor Dashboard
            </p>
          </Link>
        </div>
        <div className="flex gap-6">
          <Link to="/supplierdashboard">
            <p className="p-3 rounded text-lg hover:text-purpleColor cursor-pointer">
              Supplier Dashboard
            </p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
