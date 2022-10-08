import React from "react";
import {ChatBoxContainer, Message, TriangleTopRight, MessageTitle, MessageBody, MessageTime} from "./styles";

type IChatBoxDefaultProps = {
    companyName?: string,
    message?: string
}

const chatBoxDefaultProps: IChatBoxDefaultProps = {
    companyName: 'Support',
    message: "Hello! \uD83D\uDC4B\uD83C\uDFFC \n\nWhat can we do for you?"
}

const ChatBox: React.FC<IChatBoxDefaultProps> = ({companyName, message}) => {
    !companyName && (companyName = chatBoxDefaultProps.companyName);
    !message && (message = chatBoxDefaultProps.message);
    let time: string = new Date().toTimeString().split(":").slice(0, 2).join(":")
    return (
        <ChatBoxContainer>
            <Message>
                <TriangleTopRight/>
                <MessageTitle>{companyName}</MessageTitle>
                <MessageBody>{message}</MessageBody>
                <MessageTime>{time}</MessageTime>
            </Message>
        </ChatBoxContainer>
    )
}

export default ChatBox;