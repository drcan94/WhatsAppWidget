import React, {useContext, useEffect} from 'react';
import {ChatContext} from "../../context/ChatContext";
import ChatBox from "../ChatBox";
import SendButton from "../SendButton";
import Header from "../Header";
import WaButton from "../WaButton";
import {WidgetContainer} from "./styles";
import {IconType} from "react-icons/lib/cjs/iconBase";

type AllProps = {
    CompanyIcon?: IconType,
    companyName?: string,
    replyTimeText?: string
    message?: string
    phoneNumber?: string,
    sendButtonText?: string,
    inputPlaceHolder?: string,
}

const WidgetContent: React.FC<AllProps & { open?: boolean }> = ({open = false, ...props}) => {
    const {isChatOpen, setIsChatOpen} = useContext(ChatContext)
    useEffect(() => {
        if (open) {
            setIsChatOpen(true);
        }
    }, [open, setIsChatOpen])

    return (
        <React.Fragment>
            <WidgetContainer open={isChatOpen}>
                <Header
                    CompanyIcon={props.CompanyIcon}
                    companyName={props.companyName}
                    replyTimeText={props.replyTimeText}
                />
                <ChatBox
                    companyName={props.companyName}
                    message={props.message}
                />
                <SendButton
                    phoneNumber={props.phoneNumber}
                    sendButtonText={props.sendButtonText}
                    inputPlaceHolder={props.inputPlaceHolder}
                />
            </WidgetContainer>
            <WaButton/>
        </React.Fragment>
    )
}
export default WidgetContent