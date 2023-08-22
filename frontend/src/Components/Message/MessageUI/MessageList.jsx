import React, { useState, useEffect } from "react";

function Message({ name, message, time, imageUrl }) {
  return (
    <div className="flex justify-between items-center p-3 hover:bg-gray-200 rounded-xl relative">
      <div className="w-16 h-16 relative flex flex-shrink-0">
        <img
          className="shadow-md rounded-full w-full h-full object-cover"
          src={imageUrl}
          alt={name}
        />
        <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
          <div className="bg-green-500 rounded-full w-3 h-3"></div>
        </div>
      </div>
      <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
        <p className="font-bold">{name}</p>
        <div className="flex items-center text-sm font-bold">
          <div className="min-w-0">
            <p className="truncate">{message}</p>
          </div>
          <p className="ml-2 whitespace-no-wrap">{time}</p>
        </div>
      </div>
      <div className="bg-blue-700 w-3 h-3 rounded-full flex flex-shrink-0 hidden md:block group-hover:block"></div>
    </div>
  );
}

function MessageList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessageDataFromAPI()
      .then((data) => {
        setMessages(data);
      })
      .catch((error) => {
        console.error("Error fetching message data:", error);
      });
  }, []);

  // Mock fetch message data from API
  const fetchMessageDataFromAPI = async () => {
    // Replace this with  API call
    const response = await fetch("backend-api");
    const data = await response.json();
    return data;
  };

  const dummyMessages = [
    {
      name: "Tony Stark",
      message: "Hey, Are you there?",
      time: "10min",
      imageUrl: "https://randomuser.me/api/portraits/men/97.jpg",
    },
    {
      name: "Steve Rogers",
      message: "Yes, I'm here!",
      time: "15min",
      imageUrl: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    //dummy test
  ];

  return (
    <div>
      {messages.length === 0
        ? dummyMessages.map((message, index) => (
            <Message
              key={index}
              name={message.name}
              message={message.message}
              time={message.time}
              imageUrl={message.imageUrl}
            />
          ))
        : messages.map((message, index) => (
            <Message
              key={index}
              name={message.name}
              message={message.message}
              time={message.time}
              imageUrl={message.imageUrl}
            />
          ))}
    </div>
  );
}

export default MessageList;
