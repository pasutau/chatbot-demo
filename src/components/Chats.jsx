import React from 'react';
import List from '@mui/material/List';
import { Chat } from './index';
// import ListItem from '@mui/material/ListItem';
// import Divider from '@mui/material/Divider';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';

const Chats = (props) => {

    return (
        <List
            sx={{
                height: '400px',
                padding: '0px',
                overflow: 'auto',
            }}
            id={"scroll-area"}
        >
            {props.chats.map((chat, index) => {
                return <Chat text={chat.text} type={chat.type} key={index.toString()}/>
            })}
        </List>
    )
}

export default Chats
