import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from '../ui/label'
import { Input } from '../ui/input'
const NewGroupDialog = ({open,setOpen}) => {
    const initialState={
        name:"",
        isGroupChat:true,
        participants:[],
        admins:[],
    }
    const [newGroupState,setNewGroupState]=useState(initialState);
    const [participants,setParticipants]=useState([]);
    const [admins,setAdmins]=useState([]);
  return (
   <Dialog open={open} onOpenChange={setOpen}>
  
  <DialogContent>
    <DialogHeader>
      <DialogTitle>New Group</DialogTitle>
      <DialogDescription>
        <form className='flex flex-col gap-2'>
            <div className="flex flex-col gap-1">
                <Label>Chat Name</Label>
                <Input  value={newGroupState.name} onChange={(e)=>setNewGroupState({...newGroupState,name:e.target.value})}/>
            </div>
            <div className="flex flex-col gap-1">
                <Label>Select Participants</Label>
                
            </div>
        </form>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default NewGroupDialog
