import { Chat } from "@mui/icons-material";
import React from "react";
import './chats.css'

function Chats(){
    return <div className="chats">
        <Chat name="mark"
          message="Yo whats up" 
          timestamp="40 seconds ago" 
          profilepics='...' />
        <Chat name="mark" 
            message="Yo whats up" 
            timestamp="40 seconds ago" 
            profilepics='...' />
        <Chat name="mark" 
            message="Yo whats up" 
            timestamp="40 seconds ago" 
            profilepics='...' />
        <Chat name="mark" 
            message="Yo whats up" 
            timestamp="40 seconds ago" 
            profilepics='...' />


    </div>
}
export default Chats;
