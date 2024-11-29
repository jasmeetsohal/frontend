import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-green-600">Dashboard</h1>
      <p className="mt-4 text-lg text-gray-700">
        Manage your files and activities here.
      </p>
    </div>
  );
};

export default Dashboard;
