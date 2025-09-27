import React from 'react'
import { useSelector } from 'react-redux'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getTime } from 'date-fns/getTime';
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';
import { Paperclip, Search, Video } from 'lucide-react';
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
          <div className='flex items-center px-4 py-2  justify-between bg-gray-100'>
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
            <div className="flex  flex-1 max-h-[80vh] overflow-y-auto h-full bg-blue-200 flex-col w-full gap-1">
              {
                messages.map((message,index)=>{
                  return <div key={index} className={`w-full flex ${message.sender._id==userId ? 'justify-start':'justify-end'}`}>
                    <div className={`w-[60%] ${message.sender._id!=userId && 'text-end'} border `}>
                    {
                      message?.text ? <div>{message?.text || "Text will appear here"}</div> : <div className='h-[400px] w-[400px] bg-gray-400 rounded-[8px]'> Image will appear here</div>
                    }
                  </div>
                  </div>
                 
                })
              }
            </div>

            <form className='p-2 flex items-stretch gap-2 bg-red-200'>
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
