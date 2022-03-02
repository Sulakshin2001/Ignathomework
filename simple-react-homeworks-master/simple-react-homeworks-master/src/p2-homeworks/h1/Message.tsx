import React from 'react'
import s from "./Message.module.css";
interface MessageProps{
    name: string;
    message: string;
    time: string;
    avatar: string;

}
function Message({name,message,time,avatar}: MessageProps) {
    return (
        <div className={s.message}>
            <div>
            <img src ={avatar} className={s.image}/>
            </div>
            <div className={s.info}>
         {name}
            {message}
                <div className={s.time}>
            {time}
                </div>
            </div>
        </div>
    )
}

export default Message
