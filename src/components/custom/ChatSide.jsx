import React, { useEffect, useRef, useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';
import { Paperclip, Search, User, Video } from 'lucide-react';
import { Input } from '../ui/input';

const ChatSide = () => {
  const { selectedChat } = useSelector((state) => state.chats);
  const { messages } = useSelector((state) => state.messages);
  let userId = '66fe2b134af0c4a8a1c11111';
  const scrollRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  // Scroll to bottom for new messages
  useEffect(() => {
    const scrollToBottom = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    };

    if (!isLoading) {
      setTimeout(scrollToBottom, 0);
    }
  }, [messages, selectedChat, isLoading]);

  // Handle scroll event to detect when user reaches top
  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container || isLoading) return;

    // Check if scrolled to top (within 50px from top)
    if (container.scrollTop <= 50) {
      console.log('📨 API CALL NEEDED: Fetch more messages!');
      console.log('Chat ID:', selectedChat?._id);
      console.log('Oldest message ID:', messages[0]?._id);
      
      // Set loading state to prevent multiple calls
      // setIsLoading(true);
      
      // Simulate API call completion after 1 second
      setTimeout(() => {
        console.log('✅ API call completed - Add your fetch logic here');
        // setIsLoading(false);
      }, 1000);
    }
  }, [isLoading, selectedChat, messages]);

  // Add scroll event listener
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll]);

  return (
    <div className='w-full flex-1'>
      {selectedChat ? (
        <div className='flex flex-col w-full h-full'>
          {/* Header */}
          <div className='flex items-center px-4 py-2 justify-between'>
            <div className='flex items-center gap-2'>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <div>{selectedChat?.isGroupChat == true ? 'Group Chat Name' : 'Person Name'}</div>
                <div>last seen {formatDistanceToNow(selectedChat?.updatedAt, { addSuffix: true })}</div>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <div className='flex justify-center rounded-[6px] items-center p-1'>
                <Video className='h-5 w-5 text-gray-500 cursor-pointer' />
              </div>
              <div className='flex justify-center rounded-[6px] items-center p-1'>
                <Search className='h-5 w-5 text-gray-500 cursor-pointer' />
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <div 
            ref={scrollRef} 
            className="flex px-3 flex-1 max-h-[80vh] overflow-y-auto h-full flex-col w-full gap-1"
          >
            {/* Loading indicator */}
            {isLoading && (
              <div className="text-center py-2 text-gray-500">
                Loading older messages...
              </div>
            )}

            {messages.map((message, index) => {
              const isOwnMessage = message.sender._id === userId;
              
              return (
                <div 
                  key={index} 
                  className={`w-full flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[60%] ${isOwnMessage ? 'text-end' : ''}`}>
                    {message?.text ? (
                      selectedChat?.isGroupChat ? (
                        <div className={`flex items-center gap-2 ${isOwnMessage ? 'flex-row-reverse' : ''}`}>
                          {!isOwnMessage && <User />}
                          <div className={`px-3 py-1 rounded ${isOwnMessage ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}`}>
                            {message?.text}
                          </div>
                        </div>
                      ) : (
                        <div className={`px-3 py-1 rounded ${isOwnMessage ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}`}>
                          {message?.text}
                        </div>
                      )
                    ) : (
                      <div className='h-[400px] w-[400px] bg-gray-400 rounded-[8px]'>
                        Image will appear here
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Input Form */}
          <form className='p-1 flex items-stretch gap-2 bg-red-200'>
            <div className="p-1 bg-gray-200 cursor-pointer">
              <Paperclip />
            </div>
            <Input />
          </form>
        </div>
      ) : (
        <div className="text-2xl font-medium h-full flex items-center justify-center w-full">
          Select Chat to start Chatting
        </div>
      )}
    </div>
  )
}

export default ChatSide
// import React, { useEffect, useRef } from 'react'
// import { useSelector } from 'react-redux'
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';
// import { Paperclip, Search, User, Video } from 'lucide-react';
// import { Input } from '../ui/input';

// const ChatSide = () => {
//   const { selectedChat } = useSelector((state) => state.chats);
//   const { messages,page,limit } = useSelector((state) => state.messages);
//   let userId = '66fe2b134af0c4a8a1c11111';
//   const scrollRef = useRef(null);

//   // Scroll to bottom whenever messages change
//   useEffect(() => {
//     const scrollToBottom = () => {
//       if (scrollRef.current) {
//         scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
//       }
//     };

//     // Use setTimeout to ensure the DOM has updated
//     setTimeout(scrollToBottom, 0);
//   }, [messages, selectedChat]); // Also trigger when selectedChat changes

//   // Additional effect to scroll when component first mounts with messages
//   useEffect(() => {
//     if (scrollRef.current && messages.length > 0) {
//       setTimeout(() => {
//         scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
//       }, 100);
//     }
//   }, []); // Empty dependency array - runs once on mount

//   return (
//     <div className='w-full flex-1'>
//       {selectedChat ? (
//         <div className='flex flex-col w-full h-full'>
//           {/* Header */}
//           <div className='flex items-center px-4 py-2 justify-between'>
//             <div className='flex items-center gap-2'>
//               <Avatar>
//                 <AvatarImage src="https://github.com/shadcn.png" />
//                 <AvatarFallback>CN</AvatarFallback>
//               </Avatar>
//               <div className="flex flex-col">
//                 <div>{selectedChat?.isGroupChat == true ? 'Group Chat Name' : 'Person Name'}</div>
//                 <div>last seen {formatDistanceToNow(selectedChat?.updatedAt, { addSuffix: true })}</div>
//               </div>
//             </div>

//             <div className="flex gap-2 items-center">
//               <div className='flex justify-center rounded-[6px] items-center p-1'>
//                 <Video className='h-5 w-5 text-gray-500 cursor-pointer' />
//               </div>
//               <div className='flex justify-center rounded-[6px] items-center p-1'>
//                 <Search className='h-5 w-5 text-gray-500 cursor-pointer' />
//               </div>
//             </div>
//           </div>

//           {/* Messages Container */}
//           <div 
//             ref={scrollRef} 
//             className="flex px-3 flex-1 max-h-[80vh] scroll-smooth overflow-y-auto h-full flex-col w-full gap-1"
//           >
//             {messages.map((message, index) => {
//               const isOwnMessage = message.sender._id === userId;
              
//               return (
//                 <div 
//                   key={index} 
//                   className={`w-full flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}
//                 >
//                   <div className={`max-w-[60%] ${isOwnMessage ? 'text-end' : ''}`}>
//                     {message?.text ? (
//                       selectedChat?.isGroupChat ? (
//                         <div className={`flex items-center gap-2 ${isOwnMessage ? 'flex-row-reverse' : ''}`}>
//                           {!isOwnMessage && <User />}
//                           <div className={`px-3 py-1 rounded ${isOwnMessage ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}`}>
//                             {message?.text}
//                           </div>
//                         </div>
//                       ) : (
//                         <div className={`px-3 py-1 rounded ${isOwnMessage ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}`}>
//                           {message?.text}
//                         </div>
//                       )
//                     ) : (
//                       <div className='h-[400px] w-[400px] bg-gray-400 rounded-[8px]'>
//                         Image will appear here
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Input Form */}
//           <form className='p-1 flex items-stretch gap-2 bg-red-200'>
//             <div className="p-1 bg-gray-200 cursor-pointer">
//               <Paperclip />
//             </div>
//             <Input />
//           </form>
//         </div>
//       ) : (
//         <div className="text-2xl font-medium h-full flex items-center justify-center w-full">
//           Select Chat to start Chatting
//         </div>
//       )}
//     </div>
//   )
// }

// export default ChatSide
// import React, { useEffect, useRef } from 'react'
// import { useSelector } from 'react-redux'
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';
// import { Paperclip, Search, User, Video } from 'lucide-react';
// import { Input } from '../ui/input';
// const ChatSide = () => {
//   const { selectedChat } = useSelector((state) => state.chats);
//   const { messages } = useSelector((state) => state.messages);
//   let userId = '66fe2b134af0c4a8a1c11111';
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const div = scrollRef.current;
//     console.log("Useeffect run");

//     if (div) {
//       div.scrollTop = div.scrollHeight; // ✅ correct
//       console.log("Scrolled to end");
//     }
//   }, [messages]); // ⚡ important: trigger on new messages

//   return (
//     <div className='w-full  flex-1 '>
//       {
//         selectedChat ? <div className='flex flex-col w-full h-full'>
//           <div className='flex items-center px-4 py-2  justify-between '>
//             <div className='flex items-center gap-2 '>
//               <Avatar>
//                 <AvatarImage src="https://github.com/shadcn.png" />
//                 <AvatarFallback>CN</AvatarFallback>
//               </Avatar>
//               <div className="flex flex-col">
//                 <div>{selectedChat?.isGroupChat == true ? 'Group Chat Name' : 'Person Name'}</div>

//                 <div>last seen {formatDistanceToNow(selectedChat?.updatedAt, { addSuffix: true })}</div>
//               </div>
//             </div>



//             <div className="flex gap-2 items-center">
//               <div className='flex justify-center rounded-[6px] items-center p-1 '>
//                 <Video className='h-5 w-5 text-gray-500 cursor-pointer' />

//               </div>
//               <div className='flex justify-center rounded-[6px] items-center p-1 '>
//                 <Search className='h-5 w-5 text-gray-500 cursor-pointer' />
//               </div>
//             </div>

//           </div>
//           {/* Chats Div */}
//           <div ref={scrollRef} className="flex px-3  flex-1 max-h-[80vh] overflow-y-auto h-full  flex-col w-full gap-1">
//             {
//               messages.map((message, index) => {
//                 return <div key={index} className={`w-full flex ${message.sender._id == userId ? 'justify-start' : 'justify-end'}`}>
//                   <div className={`max-w-[60%]  ${message.sender._id != userId && 'text-end '}  `}>
//                     {
//                       message?.text ? selectedChat?.isGroupChat ? <div className={`flex items-center gap-2 ${message.sender._id != userId && 'text-end'}`}>
//                         {message.sender._id == userId && <User />}
//                         <div>{message?.text}</div>
//                       </div> : <div className={`bg-gray-500 text-white px-3 py-1 rounded ${message.sender._id != userId && 'text-end bg-green-500 text-white'}`}>{message?.text || "Text will appear here"}</div> : <div className='h-[400px] w-[400px] bg-gray-400 rounded-[8px]'> Image will appear here</div>
//                     }
//                   </div>
//                 </div>

//               })
//             }
//           </div>

//           <form className='p-1 flex items-stretch gap-2 bg-red-200'>
//             <div className="p-1 bg-gray-200 cursor-pointer">
//               <Paperclip />
//             </div>
//             <Input />
//           </form>
//         </div> : <div className="text-2xl font-medium h-full  flex items-center justify-center w-full">
//           Select Chat to start Chatting
//         </div>
//       }
//     </div>
//   )
// }

// export default ChatSide
