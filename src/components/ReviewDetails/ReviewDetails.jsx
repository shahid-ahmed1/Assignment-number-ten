import React, { useContext } from 'react';
import { Link, useLoaderData,} from 'react-router-dom';
import { FaStar, FaUser, FaEnvelope } from "react-icons/fa";
import { AuthContext } from '../../authprovider/AuthProvider';
import Swal from 'sweetalert2';
const ReviewDetails = () => {
  const {user} =useContext(AuthContext)
    const reviews = useLoaderData();
    const {image, title,description,rating,year,genre,email,name,_id} = reviews ;
    const handleWachlistReview =()=>{
      const wachlistItem = {
        title:title,
        rating: rating,
        name:name,
        email: email,
      }
      fetch('http://localhost:5000/wachlist',{
            method:'post',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(wachlistItem)
           })
           .then(res=>res.json())
           .then(data => {
            if (data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "Added to Watchlist 🎉",
                icon: "success",
                timer: 2000
              });
            } else if (data.message === "Already in Watchlist") {
              Swal.fire({
                title: "Oops!",
                text: "This game is already in your Watchlist!",
                icon: "warning",
                timer: 2000
              });
            }
           })
    }
    return (
        <div className="max-w-md my-10 mx-auto bg-white shadow-xl rounded-2xl overflow-hidden p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <img  className="w-full h-60 object-cover rounded-t-2xl" src={image} alt={title} />
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
    
       <button onClick={handleWachlistReview} className="mt-6 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-xl shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 cursor-pointer">
        + Add to WatchList
      </button>
      
        </div>
      </div>
    );
};

export default ReviewDetails;