import React from "react";
import "./SwipeCard.css"; // Certifique-se de ajustar o caminho

const SwipeCard = ({
  restaurant,
  currentImageIndex,
  onLike,
  onDislike,
  onNextImage,
  onPreviousImage,
}) => {
  return (
    <div className="swipe-card">
      <div className="image-container">
        <img
          src={restaurant.images[currentImageIndex]}
          alt={restaurant.name}
          className="restaurant-image"
        />
        <div className="arrow-container">
          <button className="arrow-button" onClick={onPreviousImage}>
            ◀️
          </button>
          <button className="arrow-button" onClick={onNextImage}>
            ▶️
          </button>
        </div>
      </div>

      <div className="info-container">
        <div className="section">
          <h2 className="restaurant-name">{restaurant.name}</h2>
          <p className="restaurant-description">{restaurant.description}</p>
        </div>

        <div className="section">
          <h3>Informações</h3>
          <p className="restaurant-address">Endereço: {restaurant.address}</p>
          <p className="restaurant-distance">Distância: {restaurant.distance} km</p>
          <p className="restaurant-music">Tipo de música: {restaurant.musicType}</p>
          <p className="restaurant-hours">Horário: {restaurant.openingHours}</p>
          <p className="restaurant-ambiance">Ambiente: {restaurant.ambiance}</p>
        </div>

        <div className="section">
          <h3>Menu</h3>
          <ul className="menu-list">
            {restaurant.menu.map((item, index) => (
              <li key={index} className="menu-item">
                <strong>{item.name}</strong>: {item.price} - {item.description}
              </li>
            ))}
          </ul>
        </div>

        <div className="action-buttons">
          <button className="dislike-button" onClick={onDislike}>
            ❌
          </button>
          <button className="like-button" onClick={onLike}>
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwipeCard;
