import React, { useState } from 'react';

const ExtraSection = () => {
  const [discussions, setDiscussions] = useState([
    { topic: "Is Elden Ring the best RPG of all time?", user: "Alex" },
    { topic: "What makes a game truly immersive?", user: "Sam" },
  ]);

  const [newDiscussion, setNewDiscussion] = useState("");

  const handleAddDiscussion = () => {
    if (newDiscussion.trim()) {
      setDiscussions([{ topic: newDiscussion, user: "You" }, ...discussions]);
      setNewDiscussion("");
    }
  };
    return (
      <div className="bg-gray-100  p-8 rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
        Trending Game Discussions
      </h2>

     
      <div className="space-y-4">
        {discussions.map((disc, index) => (
          <div key={index} className="bg-white  p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-900 ">
              {disc.topic}
            </h3>
            <p className="text-sm text-gray-600 ">Posted by {disc.user}</p>
          </div>
        ))}
      </div>

      
      <div className="mt-6 bg-white  p-6 rounded-lg shadow">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 ">
          💬 Start a New Discussion
        </h3>
        <input
          type="text"
          placeholder="Enter a discussion topic..."
          className="w-full p-2 mb-3 border rounded"
          value={newDiscussion}
          onChange={(e) => setNewDiscussion(e.target.value)}
        />
        <button
          onClick={handleAddDiscussion}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Discussion
        </button>
      </div>
    </div>
    );
};

export default ExtraSection;