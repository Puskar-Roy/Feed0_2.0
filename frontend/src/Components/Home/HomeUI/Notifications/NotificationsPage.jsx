import React, { useState, useEffect } from "react";
import { FaBell, FaUser, FaComment } from "react-icons/fa";

function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotificationsFromAPI()
      .then((data) => {
        setNotifications(data);
      })
      .catch((error) => {
        console.error("Error fetching notifications:", error);
      });
  }, []);

  const fetchNotificationsFromAPI = async () => {
    // Replace this with API call

    const response = await fetch("backend-api");
    const data = await response.json();
    return data;
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case "like":
        return <FaBell className="text-blue-500" />;
      case "comment":
        return <FaComment className="text-green-500" />;
      case "update":
        return <FaUser className="text-purple-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="m-12 mt-[6rem]">
      <div className="bg-white rounded-lg p-6 shadow-md w-full">
        <h1 className="text-2xl font-semibold mb-4">Notifications</h1>
        <ul>
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className="flex items-center space-x-3 p-2 hover:bg-gray-100 cursor-pointer"
            >
              <div className="text-2xl">
                {getNotificationIcon(notification.type)}
              </div>
              <div>
                <p className="text-gray-700">{notification.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NotificationsPage;
