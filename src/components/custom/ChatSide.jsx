import React from 'react'
import { useSelector } from 'react-redux'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';
import { Paperclip, Search, User, Video } from 'lucide-react';
import { Input } from '../ui/input';
const ChatSide = () => {
  const { selectedChat } = useSelector((state) => state.chats);
  const {messages}=useSelector((state)=>state.messages);
  let userId='66fe2b134af0c4a8a1c11111';
  console.log("Messages length are :",messages.length);

  return (
    <div className='w-full  flex-1 '>
      {
        selectedChat ? <div className='flex flex-col w-full h-full'>
          <div className='flex items-center px-4 py-2  justify-between '>
            <div className='flex items-center gap-2 '>
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
              <div className='flex justify-center rounded-[6px] items-center p-1 '>
                <Video className='h-5 w-5 text-gray-500 cursor-pointer' />

              </div>
              <div className='flex justify-center rounded-[6px] items-center p-1 '>
                <Search className='h-5 w-5 text-gray-500 cursor-pointer' />
              </div>
            </div>

          </div>
          {/* Chats Div */}
            <div className="flex px-3  flex-1 max-h-[80vh] overflow-y-auto h-full  flex-col w-full gap-1">
              {
                messages.map((message,index)=>{
                  return <div key={index} className={`w-full flex ${message.sender._id==userId ? 'justify-start':'justify-end'}`}>
                    <div className={`max-w-[60%]  ${message.sender._id!=userId && 'text-end '}  `}>
                    {
                      message?.text ? selectedChat?.isGroupChat ? <div className={`flex items-center gap-2 ${message.sender._id!=userId && 'text-end'}`}>
                         {message.sender._id==userId && <User/>}
                        <div>{message?.text}</div>
                      </div>:<div className={`bg-gray-500 text-white px-3 py-1 rounded ${message.sender._id!=userId && 'text-end bg-green-500 text-white'}`}>{message?.text || "Text will appear here"}</div> : <div className='h-[400px] w-[400px] bg-gray-400 rounded-[8px]'> Image will appear here</div>
                    }
                  </div>
                  </div>
                 
                })
              }
            </div>

            <form className='p-1 flex items-stretch gap-2 bg-red-200'>
              <div className="p-1 bg-gray-200 cursor-pointer">
                <Paperclip />
              </div>
              <Input/>
            </form>
        </div> : <div className="text-2xl font-medium h-full  flex items-center justify-center w-full">
          Select Chat to start Chatting
        </div>
      }
    </div>
  )
}

export default ChatSide
