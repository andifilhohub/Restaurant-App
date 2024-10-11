import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ExplorePage from "./ExplorePage";
import "./App.css";

const DashBoard = () => {
  const [action, setAction] = useState("Explorar");
  const [likedRestaurants] = useState([
    {
      name: "Restaurante A",
      images: ["/image/1.jpg"],
    },
    {
      name: "Restaurante B",
      images: ["/image/2.jpg"],
    },
    {
      name: "Restaurante C",
      images: ["/image/3.jpg"],
    },
    {
      name: "Restaurante D",
      images: ["/image/4.jpg"],
    },
    {
      name: "Restaurante E",
      images: ["/image/5.jpg"],
    },
  ]);

  const handleButtonClick = (button) => {
    setAction(button);
  };

  return (
    <div className="dashboard-container">
      <Sidebar likedRestaurants={likedRestaurants} />
      <div className="content">
        {action === "Explorar" && <ExplorePage />}
        {action !== "Explorar" && <h1>{action}</h1>}
      </div>
    </div>
  );
};

export default DashBoard;
