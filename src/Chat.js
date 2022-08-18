import React from "react";
// import Avatar from '@mui/icons-material/Avatar';

import Avatar from '@mui/material/Avatar';
// or
import { Avatar } from '@mui/material';

function Chat(name, profilepics, message, timestamp){
return <div className="chat">
    <Avatar className="chat__image" alt={name} src={profilePic}/> 


    </div>
}
export default Chat;