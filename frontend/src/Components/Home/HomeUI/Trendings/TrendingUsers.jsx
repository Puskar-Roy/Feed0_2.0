import React from "react";
import { FaUserPlus } from "react-icons/fa";

function formatFollowersCount(followers) {
  if (followers >= 1000000) {
    return (followers / 1000000).toFixed(1) + "M";
  } else if (followers >= 1000) {
    return (followers / 1000).toFixed(1) + "K";
  } else {
    return followers.toString();
  }
}

function SuggestedPerson({ name, username, followers }) {
  const formattedFollowers = formatFollowersCount(followers);

  return (
    <div className="flex justify-between px-1 items-center w-full rounded-lg outline outline-gray-400">
      <div>
        <img
          className=" w-10 h-10 m-2 rounded-full "
          src="/Doraemon.png"
          alt={name}
        />
      </div>
      <div className="flex-col items-center flex ">
        <p className="text-base  font-medium ">{name}</p>
        <p className="text-sm  ">@{username}</p>

        <p className="text-xs  flex">{formattedFollowers} Followers</p>
      </div>

      <button className="bg-transparent hover:bg-blue-500   font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
        <FaUserPlus className="h-4 w-4 " />
      </button>
    </div>
  );
}

function TrendingUsers() {
  const suggestedPeople = [
    { name: "Feed0 Official", username: "Feed0", followers: 100 },
    { name: "ImKKingshuk", username: "ImKKingshuk", followers: 12 },
    { name: "Puskar", username: "Puskar", followers: 12 },
    { name: "UIT", username: "UIT", followers: 10 },
    { name: "Feed0 Support", username: "Feed0Support", followers: 80 },

    // ... Add more suggested people
  ];

  return (
    <div className="overflow-y-auto space-y-4 w-full h-[18rem] mx-auto outline rounded-lg outline-gray-300  p-2 ">
      {suggestedPeople.map((person, index) => (
        <SuggestedPerson
          key={index}
          name={person.name}
          username={person.username}
          followers={person.followers}
        />
      ))}
    </div>
  );
}

export default TrendingUsers;
