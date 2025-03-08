import React, { useState } from 'react';
import {  Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyReview = () => {
    const loadedReviews = useLoaderData();
    const [reviews,setReviews]=useState(loadedReviews);

    const handleDelete=(_id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            fetch(`http://localhost:5000/review/${_id}`,{
                method:'DELETE',
                
            })
            .then(res=>res.json())
            .then(data=>{
                 
            //   console.log(data)
              if(data.deletedCount > 0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Review has been deleted.",
                    icon: "success"
                  });
                  const remainigReview = reviews.filter(review => review._id !== _id );
                  setReviews(remainigReview)
              }
          
            })
            }
          });
    }
  
    return (
        <div className="flex my-10 justify-center items-center ">
            <div className="w-full max-w-6xl p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-center">Your Reviews</h2>
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 border">Game Title</th>
                            <th className="px-4 py-2 border">Description</th>
                            <th className="px-4 py-2 border">Rating</th>
                            <th className="px-4 py-2 border">Year</th>
                            <th className="px-4 py-2 border">Genre</th>
                            <th className="px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map((review) => (
                                <tr key={review._id} className="text-center">
                                    <td className="px-4 py-2 border">{review.title}</td>
                                    <td className="px-4 py-2 border">{review.description}</td>
                                    <td className="px-4 py-2 border">{review.rating}</td>
                                    <td className="px-4 py-2 border">{review.year}</td>
                                    <td className="px-4 py-2 border">{review.genre}</td>
                                    <td className="px-4 py-2 border">
                                        <Link to={`/updateReview/${review._id}`}>
                                        <button className="text-blue-500 hover:underline mr-2 cursor-pointer">Update</button></Link>
                                     
                                        <button onClick={() => handleDelete(review._id)} className="text-red-500 hover:underline cursor-pointer">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReview;