import {useState , useEffect} from "react";
import { FaPencilAlt } from "react-icons/fa";
import MessageList from "./MessageUI/MessageList";
import ChatFooter from "./MessageUI/ChatFooter";
import ChatHeader from "./MessageUI/ChatHeader";
import ChatMessage from "./MessageUI/ChatMessage";
function Message() {
    // const [ws, setWs] = useState(null);
    // const [ online ,setOnline ] = useState({});


    // const showOnlinePeople = (peopleArray)=>{
    //     const people = {};
    //     peopleArray.forEach(({userId , userPhone})=> {
    //       people[userId] = userPhone;
    //     });
    //     console.log(people);
    //     setOnline(people);
    // }


    // const handelMessage = (e) => {
    //   const messageData = JSON.parse(e.data)
    //   if( 'online' in messageData){
    //     showOnlinePeople(messageData.online)
    //   }
    // };
    //   useEffect(() => {
    //     const ws = new WebSocket("ws://localhost:8000/api");
    //     setWs(ws);
    //     ws.addEventListener("message", handelMessage);
    //   }, []);

 
  return (
    <div className=" mt-[6rem] ">
      <div className="grid grid-cols-2 mx-auto shadow-xl mx-auto rounded-lg ">
        <div className="w-1/3 flex flex-col space-y-4 w-full">
          <h1 className="flex justify-between px-6 text-xl">
            <span>Messages</span>
            <span>
              <FaPencilAlt />
            </span>
          </h1>
          <div className="overflow-y-auto p-2">
            <MessageList/>
          </div>
        </div>
        <div className="w-2/3 h-screen w-full p-2 bg-gray-100 rounded-r-lg ">
          <div>
            <ChatHeader />
          </div>
          <div>
            <ChatMessage />
          </div>
          <div>
            <ChatFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
