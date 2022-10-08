import React, {useState} from "react";
import {ChatContext} from "./ChatContext";

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [isChatOpen, setIsChatOpen] = useState<boolean>(false)

    return React.createElement(ChatContext.Provider, {
        value: {
            isChatOpen,
            setIsChatOpen
        }
    }, children);
};

