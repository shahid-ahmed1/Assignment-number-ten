import React from 'react';
import { useLoaderData,} from 'react-router-dom';
import { FaStar, FaUser, FaEnvelope } from "react-icons/fa";
const ReviewDetails = () => {
    const reviews = useLoaderData();
    const {image, title,description,rating,year,genre,email,name,_id} = reviews 
    return (
        <div className="max-w-md my-10 mx-auto bg-white shadow-xl rounded-2xl overflow-hidden p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <img className="w-full h-60 object-cover rounded-t-2xl" src={image} alt={title} />
        <div className="p-5">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-700 text-sm mb-4">{description}</p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-semibold text-yellow-500 flex items-center">
              <FaStar className="mr-1" /> {rating}
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{genre}</span>
          </div>
          <div className="mt-4 border-t pt-4">
            <p className="text-gray-800 text-sm font-medium flex items-center">
              <FaUser className="mr-1 text-gray-700" /> {name}
            </p>
            <p className="text-gray-600 text-sm flex items-center">
              <FaEnvelope className="mr-1 text-gray-600" /> {email}
            </p>
          </div>
          <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-xl shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
            + Add to WatchList
          </button>
        </div>
      </div>
    );
};

export default ReviewDetails;