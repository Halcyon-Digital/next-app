'use client';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';
import Image from 'next/image';

function About() {
  const [images, setImages] = useState([]);
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    avatar: null,
    address: '',
  });

  const formData = new FormData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    let files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const closeImage = (file) => {
    const filterImages = images.filter(
      (singleFile) => singleFile.name != file.name
    );
    setImages(filterImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Object.keys(userInfo).map((key) => {
      formData.append(key, userInfo[key]);
    });

    images.forEach((image) => {
      formData.append('avatar', image);
    });

    axios.post('http://localhost:5000/upload', formData).then((res) => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: res.data,
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(res);
    });
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
          value={userInfo.firstName}
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
          value={userInfo.lastName}
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
          value={userInfo.email}
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
          value={userInfo.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex items-center justify-center w-full mb-4">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-35 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              className="w-10 h-10 mb-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            name="avatar"
            multiple
            onChange={handleImageChange}
          />
        </label>
      </div>

      <div>
        <div className="w-full flex items-center flex-wrap">
          {images &&
            images.map((i) => (
              <div key={i.name} className="d-inline relative">
                <Image
                  src={URL.createObjectURL(i)}
                  key={i}
                  width={120}
                  height={120}
                  alt=""
                  className="h-[120px] w-[120px] object-cover m-2"
                />
                <span
                  className="absolute top-[10px] right-[10px] text-white bg-gray-950"
                  onClick={() => closeImage(i)}
                >
                  <AiOutlineClose />
                </span>
              </div>
            ))}
        </div>
      </div>

      <div className="w-full flex items-center flex-wrap">
        {userInfo.avatar &&
          userInfo.avatar.map((i) => (
            <div key={i.name} className="d-inline relative">
              <Image
                src={URL.createObjectURL(i)}
                key={i}
                alt=""
                className="h-[120px] w-[120px] object-cover m-2"
                width={120}
                height={120}
              />
              <span
                className="absolute top-[10px] right-[10px] text-white bg-gray-400"
                onClick={() => closeImage('avatar', i)}
              >
                <AiOutlineClose />
              </span>
            </div>
          ))}
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
          value={userInfo.address}
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
