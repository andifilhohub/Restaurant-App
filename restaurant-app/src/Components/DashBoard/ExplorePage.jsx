import React, { useState } from "react";
import SwipeCard from "./SwipeCard";
import "./ExplorePage.css";

const ExplorePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const restaurants = [
    {
      name: "Café Delícia", 
      images: [
        "/image/1.jpg",
        "/image/2.jpg",
      ],
      description: "Um café aconchegante que serve deliciosos lanches e cafés especiais.",
      address: "Av. dos Cafés, 123 - Centro",
      distance: 2.5,
      musicType: "Bossa Nova",
      openingHours: "08:00 - 20:00",
      ambiance: "Aconchegante e Relaxante",
      menu: [
        { name: "Café Espresso", price: "R$ 5,00", description: "Café intenso e encorpado." },
        { name: "Coxinha", price: "R$ 8,00", description: "Tradicional salgadinho brasileiro." },
        { name: "Torta de Limão", price: "R$ 10,00", description: "Deliciosa torta de limão com merengue." },
      ],
    },
    {
      name: "Sabor do Oriente",
      images: [
        "/image/3.jpg",
        "/image/4.jpg",
      ],
      description: "Culinária asiática com pratos autênticos e exóticos, preparados por chefs experientes.",
      address: "Rua das Flores, 456 - Jardim das Rosas",
      distance: 1.2,
      musicType: "Música Tradicional",
      openingHours: "11:00 - 23:00",
      ambiance: "Exótica e Colorida",
      menu: [
        { name: "Sushi Variado", price: "R$ 45,00", description: "Seleção de sushis frescos e criativos." },
        { name: "Yakisoba", price: "R$ 30,00", description: "Macarrão frito com legumes e carne." },
        { name: "Mochi", price: "R$ 12,00", description: "Doce japonês de arroz com recheio." },
      ],
    },
    {
      name: "Cantinho do Grill",
      images: [
        "/image/5.jpg",
        "/image/6.jpg",
      ],
      description: "Uma churrascaria que oferece os melhores cortes de carne, acompanhados de um buffet variado.",
      address: "Rua do Churrasco, 789 - Vila do Lazer",
      distance: 3.0,
      musicType: "Sertanejo",
      openingHours: "17:00 - 01:00",
      ambiance: "Rústica e Aconchegante",
      menu: [
        { name: "Picanha na Brasa", price: "R$ 60,00", description: "Corte suculento e macio." },
        { name: "Linguiça Artesanal", price: "R$ 25,00", description: "Feita com temperos especiais." },
        { name: "Salada de Maionese", price: "R$ 15,00", description: "Salada fresca e saborosa." },
      ],
    },
    {
      name: "Trattoria Bella Italia",
      images: [
        "/image/7.jpg",
        "/image/8.jpg",
      ],
      description: "Restaurante italiano com pratos tradicionais e um ambiente acolhedor, perfeito para famílias.",
      address: "Rua da Pizza, 101 - Bairro Italiano",
      distance: 2.0,
      musicType: "Clássica",
      openingHours: "12:00 - 22:00",
      ambiance: "Romântica e Familiar",
      menu: [
        { name: "Pizza Marguerita", price: "R$ 40,00", description: "Pizza clássica com molho de tomate e queijo." },
        { name: "Lasagna à Bolonhesa", price: "R$ 35,00", description: "Camadas de massa com carne e queijo." },
        { name: "Tiramisu", price: "R$ 15,00", description: "Sobremesa de café e mascarpone." },
      ],
    },
    {
      name: "Viva México",
      images: [
        "/image/9.jpg",
        "/image/10.jpg",
      ],
      description: "Autêntica culinária mexicana com pratos picantes e cheios de sabor.",
      address: "Rua do Taco, 222 - Centro",
      distance: 1.5,
      musicType: "Mariachi",
      openingHours: "10:00 - 22:00",
      ambiance: "Colorida e Festiva",
      menu: [
        { name: "Taco de Carne", price: "R$ 25,00", description: "Taco recheado com carne, guacamole e salsa." },
        { name: "Burrito", price: "R$ 30,00", description: "Wrap de feijão, arroz e carne." },
        { name: "Churros", price: "R$ 12,00", description: "Sobremesa frita com recheio de doce de leite." },
      ],
    },
    {
      name: "Pizzeria La Bella",
      images: [
        "/image/11.jpg",
        "/image/12.jpg",
      ],
      description: "Pizzaria com uma grande variedade de sabores e um ambiente descontraído.",
      address: "Av. da Pizza, 999 - Bairro da Luz",
      distance: 2.8,
      musicType: "Pop",
      openingHours: "18:00 - 23:00",
      ambiance: "Descontraída e Familiar",
      menu: [
        { name: "Pizza Calabresa", price: "R$ 38,00", description: "Pizza com calabresa, cebola e azeitonas." },
        { name: "Pizza Quatro Queijos", price: "R$ 42,00", description: "Mistura de queijos especiais." },
        { name: "Pizza de Frango com Catupiry", price: "R$ 40,00", description: "Deliciosa pizza com frango desfiado." },
      ],
    },
    {
      name: "Gelato e Caffè",
      images: [
        "/image/13.jpg",
        "/image/14.jpg",
      ],
      description: "Sorveteria gourmet com gelatos artesanais e cafés especiais.",
      address: "Praça do Sorvete, 1 - Vila Gelato",
      distance: 0.8,
      musicType: "Jazz",
      openingHours: "09:00 - 21:00",
      ambiance: "Aconchegante e Refrescante",
      menu: [
        { name: "Gelato de Pistache", price: "R$ 15,00", description: "Gelato cremoso feito com pistaches frescos." },
        { name: "Café Gelado", price: "R$ 10,00", description: "Café fresco servido com gelo." },
        { name: "Torta Gelada", price: "R$ 18,00", description: "Torta de chocolate e sorvete." },
      ],
    },
    {
      name: "Bistro do Chef",
      images: [
        "./image/15.jpg",
        "./image/16.jpg",
      ],
      description: "Bistrô elegante com um cardápio sazonal e pratos gourmet.",
      address: "Rua Gourmet, 5 - Jardim Secreto",
      distance: 4.0,
      musicType: "Clássica",
      openingHours: "18:00 - 00:00",
      ambiance: "Chique e Sofisticada",
      menu: [
        { name: "Filé Mignon ao Molho Madeira", price: "R$ 80,00", description: "Corte nobre com molho especial." },
        { name: "Risoto de Funghi", price: "R$ 60,00", description: "Risoto cremoso com cogumelos." },
        { name: "Cheesecake de Frutas Vermelhas", price: "R$ 20,00", description: "Sobremesa leve e deliciosa." },
      ],
    },
  ];
  
  // Embaralhar as imagens aleatoriamente
  restaurants.forEach(restaurant => {
    restaurant.images = restaurant.images.sort(() => Math.random() - 0.5);
  });
  
  
  
  const handleLike = () => {
    if (currentIndex < restaurants.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCurrentImageIndex(0);
    }
  };

  const handleDislike = () => {
    if (currentIndex < restaurants.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCurrentImageIndex(0);
    }
  };

  const handleNextImage = () => {
    if (currentImageIndex < restaurants[currentIndex].images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="explore-container">
      {currentIndex < restaurants.length ? (
        <SwipeCard
          restaurant={restaurants[currentIndex]}
          currentImageIndex={currentImageIndex}
          onLike={handleLike}
          onDislike={handleDislike}
          onNextImage={handleNextImage}
          onPreviousImage={handlePreviousImage}
        />
      ) : (
        <h2>Você explorou todos os restaurantes!</h2>
      )}
    </div>
  );
};

export default ExplorePage;
