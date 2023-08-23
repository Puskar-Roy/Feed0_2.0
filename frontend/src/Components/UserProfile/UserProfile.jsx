import React, { useState, useEffect } from "react";
import { FaEdit, FaUserPlus, FaEnvelope } from "react-icons/fa";

function UserProfile() {
  const [userData, setUserData] = useState({
    name: "Puskar Roy",
    location: "Kolkata, India",
    occupation: "Student, Developer",
    education: "University of Technology, Computer Science & Engineering",
    following: 8,
    followers: 5,
    posts: 4,
    about: "Hello, Its Feed0 ",
    // demo
  });

  useEffect(() => {
    fetchUserProfileFromAPI()
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  }, []);

  const fetchUserProfileFromAPI = async () => {
    // Replace this with  API call

    const response = await fetch("your-backend-api-endpoint");
    const data = await response.json();
    return data;
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className=" w-[32rem] bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center">
            {/* User Profile Image */}
            <FaUserPlus className="text-indigo-500 text-3xl" />
          </div>
          <button className="bg-blue-300 hover:bg-blue-500 flex items-center px-3 py-1 rounded-full hover:text-white ">
            <FaEdit className="mr-2" /> Edit Profile
          </button>
        </div>

        <div className="mt-4">
          <h1 className="text-3xl font-semibold">{userData.name}</h1>
          <p className="text-gray-500 mt-1">{userData.location}</p>

          <p className="mt-4 text-gray-500">{userData.occupation}</p>
          <p className="mt-1 text-gray-500">{userData.education}</p>
        </div>

        <div className="flex justify-between mt-4">
          <div className="flex items-center space-x-2">
            <p className="font-semibold ">{userData.following}</p>
            <p className="text-gray-500">Following</p>
          </div>
          <div className="flex items-center space-x-2">
            <p className="font-semibold">{userData.followers}</p>
            <p className="text-gray-500">Followers</p>
          </div>
          <div className="flex items-center space-x-2">
            <p className="font-semibold">{userData.posts}</p>
            <p className="text-gray-500">Posts</p>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button className="bg-blue-500 text-white py-2 px-3 rounded-lg flex items-center">
            <FaUserPlus className="mr-2" />
            Follow
          </button>
          <button className="bg-gray-300 text-gray-700 py-2 px-3 rounded-lg flex items-center">
            <FaEnvelope className="mr-2" />
            Message
          </button>
          <button className="bg-gray-300 text-gray-700 py-2 px-3 rounded-lg flex items-center">
            <FaEnvelope className="mr-2" />
            Incognito Message
          </button>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold">About</h2>
          <p className="text-gray-600 mt-2">{userData.about}</p>
        </div>

        <div className="mt-6">
          {/* User's Posts */}
          {/* add user's posts here */}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
