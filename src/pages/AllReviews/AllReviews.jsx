import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const AllReviews = () => {
    const reviews = useLoaderData()
    const {image, title,description,rating,year,genre,email,name,_id} = reviews;
    return (
        <div className="w-11/12 mx-auto py-10">
        <h5 className="text-3xl font-bold text-center mb-8"> All Reviews</h5>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review._id} className="bg-white shadow-lg rounded-2xl overflow-hidden p-5 transition transform hover:scale-105">
              <img className="w-full h-40 object-cover rounded-lg" src={review.image} alt={review.title} />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-900">{review.title}</h2>
                <p className="text-gray-600 text-sm mt-2">{review.description.slice(0, 80)}...</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-semibold text-yellow-500 flex items-center">
                    <FaStar className="mr-1" /> {review.rating}
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{review.genre}</span>
                </div>
                <Link to={`/review/${review._id}`} className="mt-4 block text-center bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                   Explore Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default AllReviews;