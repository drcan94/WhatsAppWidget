import React, {useContext} from "react";
import {WaButtonContainer} from "./styles";
import {ChatContext} from "../../context/ChatContext";
import {FaWhatsapp} from 'react-icons/fa';



const WaButton: React.FC= () => {

    const {isChatOpen, setIsChatOpen} = useContext(ChatContext)
    const handleOpen = () => {
        setIsChatOpen(!isChatOpen)
    }

    return (
        <WaButtonContainer onClick={handleOpen}>
            <FaWhatsapp />
        </WaButtonContainer>
    )
}

export default WaButton;