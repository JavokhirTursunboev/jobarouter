import React from "react";
import { Outlet } from "react-router-dom";

const CareerLayout = () => {
  return (
    <div>
      <h2>Careers</h2>
      <Outlet />
    </div>
  );
};

export default CareerLayout;
