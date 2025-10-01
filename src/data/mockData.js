// src/data/mockData.js

export const products = [
  {
    id: 1,
    name: "Amul Gold Full Cream Milk",
    description: "500 ml",
    price: 35,
    image: "/images/Dairy-b/product-1.png",
    categoryId: 2,
  },
  {
    id: 2,
    name: "Amul Masti Pouch Curd",
    description: "400 g",
    price: 32,
    image: "/images/Dairy-b/product-2.png",
    categoryId: 2,
  },
  {
    id: 3,
    name: "English Oven Premium White Bread",
    description: "350 g",
    price: 30,
    image: "/images/Dairy-b/product-3.png",
    categoryId: 2,
  },
  {
    id: 4,
    name: "Potato",
    description: "1kg",
    price: 30,
    image: "/images/veg-fruits/product-1.jpg",
    categoryId: 1,
  },
  {
    id: 5,
    name: "Tomato",
    description: "500gm",
    price: 35,
    image: "/images/veg-fruits/product-2.jpg",
    categoryId: 1,
  },
  {
    id: 6,
    name: "Onion",
    description: "1kg",
    price: 20,
    image: "/images/veg-fruits/product-3.jpg",
    categoryId: 1,
  },
];

// THIS IS THE CORRECTED ARRAY
export const categories = [
  {
    id: 1,
    name: "Vegetables & Fruits",
    image: "/images/category-1.png", // Correct Path
    subcategories: [
      "Fresh Vegetables",
      "Fresh Fruits",
      "Herbs & Seasonings",
      "Exotic Fruits & Veggies",
      "Cuts & Sprouts",
    ],
  },
  {
    id: 2,
    name: "Dairy & Breakfast",
    image: "/images/category-2.png", // Correct Path
    subcategories: [
      "Milk & Curd",
      "Cheese & Butter",
      "Eggs",
      "Bread & Buns",
      "Cereal & Oats",
      "Coffee & Tea",
    ],
  },
  {
    id: 3,
    name: "Munchies",
    image: "/images/category-3.png", // Correct Path
    subcategories: [
      "Chips & Crisps",
      "Namkeen",
      "Popcorn",
      "Healthy Snacks",
      "Biscuits & Cookies",
    ],
  },
  {
    id: 4,
    name: "Chicken, Meat & Fish",
    image: "/images/category-4.png", // Correct Path
    subcategories: [
      "Exotic Meat",
      "Chicken",
      "Sausage, Salami & Ham",
      "Fish & Seafood",
      "Mutton",
    ],
  },
  {
    id: 5,
    name: "Pet Care",
    image: "/images/category-5.png", // Correct Path
    subcategories: [
      "Dog Food & Treats",
      "Pet Grooming",
      "Cat Food & Treats",
      "Pet Health",
      "Pet Toys",
    ],
  },
  {
    id: 6,
    name: "Baby Care",
    image: "/images/category-6.png", // Correct Path
    subcategories: [
      "Baby Diapers",
      "Wipes",
      "Baby's Health",
      "Baby Feeding",
      "Oral & Nasal Care",
    ],
  },
  {
    id: 7,
    name: "Pharma & Wellness",
    image: "/images/category-7.jpg", // Correct Path
    subcategories: [
      "Healthcare Devices",
      "Everyday Medicines",
      "Cough & Cold",
      "Supplements",
      "Masks & Sanitizers",
    ],
  },
  {
    id: 8,
    name: "Toys & Games",
    image: "/images/category-8.jpg", // Correct Path
    subcategories: [
      "Board Games",
      "Card Games",
      "Soft Toys",
      "Spots Toys",
      "Teady Bears",
    ],
  },
];
