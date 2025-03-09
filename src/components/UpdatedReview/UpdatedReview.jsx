import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../authprovider/AuthProvider';
import Swal from 'sweetalert2';

const UpdatedReview = () => {
    const {user} =useContext(AuthContext)
    const reviews = useLoaderData();
    const {image, title,description,rating,year,genre,email,name,_id} = reviews;
     const handleUpdateReview =(e)=>{
        e.preventDefault()
        const form = e.target;
        const image = form.image.value;
        const title = form.title.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const year = form.year.value;
        const genre = form.genre.value;
        const email = form.email.value;
        const name = form.name.value;
         const updateReview={image,title,description,rating,year,genre,email,name}
    
         fetch(`https://y-theta-cyan.vercel.app/review/${_id}`,{
          method:'put',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(updateReview)
         })
         .then(res=>res.json())
         .then(data => {
          form.reset()
          if(data.modifiedCount > 0){
            Swal.fire({
              title: "Success!",
              text: "Update a your Review",
              icon: "success"
            });
          }
         })
      }
    return (
        <div className="max-w-2xl mx-auto my-10 p-8 bg-white shadow-lg rounded-2xl border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Update Game Review</h2>
        <form onSubmit={handleUpdateReview} className="space-y-5">
          <input type="text" defaultValue={image} name="image" placeholder="Game Cover Image URL" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
          <input type="text" name="title"  defaultValue={title} placeholder="Game Title" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
          <textarea name="description"  defaultValue={description} placeholder="Review Description" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required></textarea>
          <input type="number" name="rating"  defaultValue={rating} placeholder="Rating (1-10)" min="1" max="10" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
          <input type="number" name="year"  defaultValue={year} placeholder="Publishing Year (e.g. 2024)" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
          <select name="genre"  defaultValue={genre} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required>
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="RPG">RPG</option>
            <option value="Adventure">Adventure</option>
            <option value="Shooter">Shooter</option>
          </select>
          <input type="email" value={user?.email} name="email" placeholder="Your Email" className="w-full p-3 border rounded-lg bg-gray-100"  />
          <input type="text" value={user?.displayName} name="name" placeholder="Your Name" className="w-full p-3 border rounded-lg bg-gray-100" />
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer">Update Review</button>
        </form>
      </div>
    );
};

export default UpdatedReview;