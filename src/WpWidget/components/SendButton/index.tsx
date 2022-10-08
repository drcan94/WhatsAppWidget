import React, {useState} from "react";
import {SendButtonContainer,SendButtonInput,SendingButton} from "./styles";

type ISendButtonDefaultProps = {
    phoneNumber?: string,
    sendButtonText?: string,
    inputPlaceHolder?: string,
}

const sendButtonDefaultProps: ISendButtonDefaultProps = {
    sendButtonText: undefined,
    inputPlaceHolder: 'Support',
}


const SendButton: React.FC<ISendButtonDefaultProps> = ({sendButtonText, inputPlaceHolder, phoneNumber}) => {
    !sendButtonText && (sendButtonText = sendButtonDefaultProps.sendButtonText);
    !inputPlaceHolder && (inputPlaceHolder = sendButtonDefaultProps.inputPlaceHolder);

    const [message, setMessage] = useState("")

    const handleClick = () => {
        if(phoneNumber !== undefined && !phoneNumber) {
            window.alert('Geçersiz Telefon Numarası!');
            return false;
        }
        window.open("https://wa.me/" + phoneNumber + "?text=" + message)
        setMessage("")
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    return (
        <SendButtonContainer>
            <SendButtonInput placeholder={inputPlaceHolder} onChange={handleChange} value={message} />
            <SendingButton onClick={handleClick}>
                {sendButtonText}
            </SendingButton>
        </SendButtonContainer>
    )
}

export default SendButton;