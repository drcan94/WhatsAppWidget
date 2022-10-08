import React, {createContext} from "react";

type IContext = {
    isChatOpen: boolean,
    setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const defaultChatValue: IContext = {
    isChatOpen: false,
    setIsChatOpen: () => {}
}

export const ChatContext = createContext<IContext>(defaultChatValue);