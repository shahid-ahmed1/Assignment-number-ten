import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const GameWatchlist = () => {
    const loadedReviews = useLoaderData();
    const [reviews,setReviews]=useState(loadedReviews);
    const {image, title,description,rating,year,genre,email,name,_id,addedDate} = reviews ;
    return (
        <div className="flex my-10 justify-center items-center ">
        <div className="w-full max-w-6xl p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Your Game Wachlist</h2>
            <table className="min-w-full table-auto">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2 border">Game Title</th>
                        <th className="px-4 py-2 border">Rating</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map((review) => (
                            <tr key={review._id} className="text-center">
                                <td className="px-4 py-2 border">{review.title}</td>
                                <td className="px-4 py-2 border">{review.rating}</td>
                               
                            
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default GameWatchlist;