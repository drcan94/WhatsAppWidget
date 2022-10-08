import React from "react";
import {ChatProvider} from "./context/ChatProvider";
import WidgetContent from "./components/WidgetContent";

const WhatsAppWidget = (props:any) => {
    return (
        <ChatProvider>
            <WidgetContent {...props} />
        </ChatProvider>
    )
}

export default WhatsAppWidget