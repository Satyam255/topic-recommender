import React from "react";

interface Props {
  topics?: string[];
}

const Recommendations: React.FC<Props> = ({ topics = [] }) => {
  if (!topics.length) {
    return <p className="text-gray-500 text-center">No recommendations found.</p>;
  }

  return (
    <div className="bg-white p-5 rounded-xl shadow-md w-full max-w-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">Recommended Topics</h2>

      {/* Scrollable Container */}
      <div className="max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 rounded-lg">
        <ul className="space-y-3">
          {topics.map((topic, index) => (
            <li
              key={index}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-3 rounded-lg text-lg font-medium cursor-pointer transition-all transform hover:scale-105 hover:shadow-lg hover:brightness-110"
            >
              {topic.replace(/\*\*/g, "").replace(/^\*\s*/, "")}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recommendations;
