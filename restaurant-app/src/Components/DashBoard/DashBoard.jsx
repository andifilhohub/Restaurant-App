import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Certifique-se de que o caminho esteja correto
import ExplorePage from "./ExplorePage"; // Certifique-se de que o caminho esteja correto
import "./App.css";

const DashBoard = () => {
  const [action, setAction] = useState("Explorar");
  const [likedRestaurants] = useState([
    {
      name: "Restaurante A",
      images: ["/image/1.jpg"], // Imagem 1
    },
    {
      name: "Restaurante B",
      images: ["/image/2.jpg"], // Imagem 2
    },
    {
      name: "Restaurante C",
      images: ["/image/3.jpg"], // Imagem 3
    },
    {
      name: "Restaurante D",
      images: ["/image/4.jpg"], // Imagem 4
    },
    {
      name: "Restaurante E",
      images: ["/image/5.jpg"], // Imagem 5
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
