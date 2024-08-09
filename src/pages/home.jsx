import React from 'react';

export const Home = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white p-4 rounded mb-6">
        <h1 className="text-3xl font-bold">Welcome to Our Application!</h1>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-lg">
          We are excited to have you here. Our application offers a variety of features and tools to help you manage your tasks efficiently. Explore our sections to learn more about what we have to offer.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Content</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
            <p>
              Discover our first feature that allows you to manage your tasks effortlessly.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
            <p>
              Our second feature provides advanced analytics to track your progress.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
            <p>
              Explore our third feature designed for collaborative work and team management.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Updates</h2>
        <ul className="list-disc list-inside">
          <li><strong>Update 1:</strong> We have added new customization options.</li>
          <li><strong>Update 2:</strong> Improved performance and speed across the application.</li>
          <li><strong>Update 3:</strong> Enhanced security features for better data protection.</li>
        </ul>
      </section>

      <footer className="bg-blue-600 text-white p-4 rounded mt-6">
        <p className="text-center">© 2024 Our Application. All rights reserved.</p>
      </footer>
    </div>
  );
};
  