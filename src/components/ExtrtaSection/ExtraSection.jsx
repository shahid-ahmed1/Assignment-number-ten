import React from 'react';

const ExtraSection = () => {
    return (
        <div className="mt-10 space-y-12">
        {/* Trending Games Section */}
        <section className="bg-gray-100  p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 ">
            🎮 Trending Games
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Elden Ring", img: "https://example.com/elden.jpg" },
              { name: "Cyberpunk 2077", img: "https://example.com/cyberpunk.jpg" },
              { name: "God of War", img: "https://example.com/godofwar.jpg" },
            ].map((game, index) => (
              <div key={index} className="bg-white  p-4 rounded-lg shadow">
                <img src={game.img} alt={game.name} className="rounded-lg mb-3 w-full h-40 object-cover" />
                <h3 className="text-xl font-semibold text-gray-900 ">{game.name}</h3>
              </div>
            ))}
          </div>
        </section>
  
        {/* Featured Developers Section */}
        <section className="bg-white  p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            🔥 Featured Developers
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Hideo Kojima", img: "https://example.com/kojima.jpg", studio: "Kojima Productions" },
              { name: "Todd Howard", img: "https://example.com/todd.jpg", studio: "Bethesda" },
              { name: "Shigeru Miyamoto", img: "https://example.com/miyamoto.jpg", studio: "Nintendo" },
            ].map((dev, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
                <img src={dev.img} alt={dev.name} className="rounded-full w-20 h-20 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 ">{dev.name}</h3>
                <p className="text-gray-600 ">{dev.studio}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
};

export default ExtraSection;