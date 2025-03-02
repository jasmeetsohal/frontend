import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to the Home Page</h1>
      <p className="mt-4 text-lg text-gray-700">
        This is the starting point of your file-sharing app.
      </p>
    </div>
  );
};

export default Home;
