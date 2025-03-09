import React from 'react';
import { useNavigate } from 'react-router-dom';
import errorImage from '../Header/assets/error.png'
const ErrorComponents = ({ message = "Something went wrong!" }) => {
    const navigate = useNavigate();
    return (
        <div className="flex min-h-screen flex-col items-center justify-center h-64 text-red-700 borde p-4 rounded-xl ">
        <img 
          src={errorImage}
          alt="Error Icon" 
          className="w-24 h-24 mb-4"
        />
        <h2 className="text-2xl font-semibold">Error</h2>
        <p className="text-lg mt-2">{message}</p>
        <div className="mt-4">
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Go Home
          </button>
        </div>
      </div>
    );
};

export default ErrorComponents;