import React, { useState, useEffect } from 'react';
import img from '/images/mac.jpg';
import ThemeBtn from './ThemeBtn'; 

function Card() {
  const originalPrice = 599;
  const discountedPrice = 499;
  const [timeLeft, setTimeLeft] = useState(5); 
  const [price, setPrice] = useState(discountedPrice);
  const [showAlert, setShowAlert] = useState(false); 

  useEffect(() => {
    if (timeLeft === 0) {
      setPrice(originalPrice + 50); 
      setTimeLeft(60); 
    } else {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddToCart = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000); 
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transform transition-transform duration-500 hover:rotate-1">
      <div className="flex justify-end p-4">
      </div>
      <a href="#" onClick={scrollToGallery}>
        <img className="p-8 rounded-t-lg transition-transform duration-500 hover:scale-110" src={img} alt="product_image1" />
      </a>
      <div className="px-5 pb-5">
        <a href="#" onClick={scrollToGallery}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white transition-transform duration-500 hover:translate-y-1">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          {[...Array(4)].map((_, index) => (
            <svg
              key={index}
              className="w-4 h-4 text-yellow-300 mr-1 animate-pulse"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
          <svg
            className="w-4 h-4 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            4.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white animate-bounce">${price}</span>
          <button
            onClick={handleAddToCart}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-transform transform hover:scale-110 hover:rotate-3"
          >
            Add to cart
          </button>
        </div>
        <div className="mt-4 text-center text-gray-700 dark:text-gray-300">
          {price === originalPrice + 50 ? (
            <span className="font-bold text-red-500 animate-ping">Sale ended!</span>
          ) : (
            <>
              Sale ends in: <span className="font-bold animate-pulse">{timeLeft}s</span>
            </>
          )}
        </div>

        {showAlert && (
          <div className="mt-4 p-2 bg-green-500 text-white rounded shadow-md animate-fade-in-out">
            Product added successfully!
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
