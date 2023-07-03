'use client';
import { useState } from 'react';

function About() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    avatar: null,
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFile = (e) => {
    const { name, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files[0],
    }));
  };
  // ok
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData);
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="firstName"
          className="block mb-2 font-medium text-gray-700"
        >
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="lastName"
          className="block mb-2 font-medium text-gray-700"
        >
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="block mb-2 font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="avatar"
          className="block mb-2 font-medium text-gray-700"
        >
          Avatar
        </label>
        <input
          type="file"
          name="avatar"
          id="avatar"
          className="w-full"
          accept="image/*"
          onChange={handleFile}
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="address"
          className="block mb-2 font-medium text-gray-700"
        >
          Address
        </label>
        <textarea
          name="address"
          id="address"
          rows="3"
          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Register
      </button>
    </form>
  );
}

export default About;
