import React, { useState } from "react";
import "./App.css"; // Certifique-se de que o caminho esteja correto

const Sidebar = ({ likedRestaurants }) => {
  const [activeTab, setActiveTab] = useState("Likes"); // Estado para controlar a aba ativa

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Atualiza a aba ativa ao clicar
    // Você pode adicionar lógica adicional aqui para exibir conteúdo correspondente
  };

  return (
    <div className="sidebar">
      <div className="user-header">
        <img
          src="/image/profile.jpeg"
          alt="User Avatar"
          className="user-avatar"
        />
        <h2 className="user-name">Gabriel</h2>
        <span className="icon">⚙️</span> {/* Ícone de Configurações */}
      </div>

      <div className="tabs">
        <div
          className={`tab ${activeTab === "Likes" ? "active" : ""}`} // Adiciona classe ativa
          onClick={() => handleTabClick("Likes")} // Manipulador de clique para Likes
        >
          Likes
        </div>
        <div
          className={`tab ${activeTab === "Social" ? "active" : ""}`} // Adiciona classe ativa
          onClick={() => handleTabClick("Social")} // Manipulador de clique para Social
        >
          Social
        </div>
      </div>

      <div className="liked-restaurants-container">
        <div className="liked-restaurants">
          {likedRestaurants.length > 0 ? (
            likedRestaurants.map((restaurant, index) => (
              <div className="restaurant-card" key={index}>
                <img 
                  src={restaurant.images[0]} 
                  alt={restaurant.name} 
                  style={{ width: '100%', height: 'auto' }} // Ajusta a imagem
                />
              </div>
            ))
          ) : (
            <p>Nenhum restaurante curtido.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
