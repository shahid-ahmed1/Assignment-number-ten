import React, { useContext, useEffect } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../authprovider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const AddReview = () => {
const {user} =useContext(AuthContext)
const navigate = useNavigate();
  const handleAddReview =(e)=>{
    e.preventDefault()
    const form = e.target;
    if (!user) {

        Swal.fire({
            title: "Unauthorized",
            text: "Please log in to submit a review",
            icon: "error"
        });
        navigate("/login");
        return; 
    }
    const image = form.image.value;
    const title = form.title.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const year = form.year.value;
    const genre = form.genre.value;
    const email = form.email.value;
    const name = form.name.value;
     const newReview={image,title,description,rating,year,genre,email,name}

     fetch('http://localhost:5000/review',{
      method:'post',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(newReview)
     })
     .then(res=>res.json())
     .then(data => {
      form.reset()
      if(data.insertedId){
        Swal.fire({
          title: "Success!",
          text: "Added a your Review",
          icon: "success"
        });
      }
     })
  }
    return (
        <div className="max-w-2xl mx-auto my-10 p-8 bg-white shadow-lg rounded-2xl border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Add Game Review</h2>
        <form onSubmit={handleAddReview} className="space-y-5">
          <input type="text" name="image" placeholder="Game Cover Image URL" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
          <input type="text" name="title" placeholder="Game Title" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
          <textarea name="description" placeholder="Review Description" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required></textarea>
          <input type="number" name="rating" placeholder="Rating (1-10)" min="1" max="10" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
          <input type="number" name="year" placeholder="Publishing Year (e.g. 2024)" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
          <select name="genre" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required>
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="RPG">RPG</option>
            <option value="Adventure">Adventure</option>
            <option value="Shooter">Shooter</option>
          </select>
          <input type="email" value={user?.email} name="email" placeholder="Your Email" className="w-full p-3 border rounded-lg bg-gray-100"  />
          <input type="text" value={user?.displayName} name="name" placeholder="Your Name" className="w-full p-3 border rounded-lg bg-gray-100" />
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 cursor-pointer transition">Submit Review</button>
        </form>
      </div>
    );
};

export default AddReview;