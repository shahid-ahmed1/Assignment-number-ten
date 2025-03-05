import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const MyReview = () => {
    const reviews = useLoaderData();
    // const [review,setReview]=useState(reviews);

    // console.log(review.length)
    const handleDelete=(_id)=>{
      console.log(_id)
    }
    const handleUpdate=(_id)=>{
        console.log(_id)
    }
    return (
        <div className="flex my-10 justify-center items-center min-h-screen">
        <div className="w-full max-w-6xl p-6  shadow-lg rounded-lg">
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
                                    <button onClick={() => handleUpdate(review._id)} className="text-blue-500 hover:underline mr-2">Update</button>
                                    <button onClick={() => handleDelete(review._id)} className="text-red-500 hover:underline">Delete</button>
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