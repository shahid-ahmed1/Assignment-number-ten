import React from 'react';

const ReviewCard = ({review}) => {
    const {image, title,description,rating,year,genre,email,name,_id} = review;
    return (
        <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-6 w-full mx-auto">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg shadow-md" />
      <div className="mt-4">
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-500 mt-2">{description}</p>
        <div className="mt-4 flex justify-between items-center text-gray-600">
          <p className="text-sm">Genre: <span className="font-medium">{genre}</span></p>
          <p className="text-sm">Year: <span className="font-medium">{year}</span></p>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <p className="font-bold text-yellow-500 text-lg">⭐ {rating}</p>
        </div>
        <button
         
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Explore Details
        </button>
    <h1>hi</h1>
    <h1>hi</h1>
    <h1>hi</h1>
    <h1>hi</h1>
    <h1>hi</h1>
    <h1>hi</h1>
    <h1>hi</h1>
    <h1>hi</h1>
    <h1>hi</h1>
    <h1>hi</h1>
    <h1>hi</h1>
    <h1>hi</h1>
    <h1>hi</h1>
    <h1>hi</h1>
    <h1>hi</h1>
    <h1>hi</h1>
    <h1>hi</h1>
    <h1>hi</h1>
    <h1>hi</h1>
    <h1>hi</h1>
      </div>
    </div>
    );
};

export default ReviewCard;