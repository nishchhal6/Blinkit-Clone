import React from "react";
import { Link } from "react-router-dom";

const InfoCards = () => {
  // 1. Har card ke liye ek 'link' property add ki gayi hai
  const cards = [
    {
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg",
      link: "/products/7", // Pharmacy category (ID 7)
    },
    {
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg",
      link: "/products/5", // Pet Care category (ID 5)
    },
    {
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg",
      link: "/products/6", // Baby Care category (ID 6)
    },
  ];

  return (
    <div className="container mx-auto px-4 my-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bgColor} relative rounded-2xl p-4 overflow-hidden h-56 flex flex-col justify-between`}
          >
            <div className={`relative z-10 ${card.textColor}`}>
              <h3 className="text-2xl font-bold leading-tight">{card.title}</h3>
              <p className="mt-1 text-sm">{card.description}</p>
            </div>

            <div className="relative z-10">
              <button
                className={`bg-black text-white font-bold py-3 px-7 rounded-lg text-sm shadow-md hover:text-gray-800 hover:bg-white`}
              >
                <Link to={card.link}>Order Now</Link>
              </button>
            </div>

            <img
              src={card.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCards;
