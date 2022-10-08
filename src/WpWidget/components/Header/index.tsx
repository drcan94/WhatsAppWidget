import React, {useContext} from "react";
import {HeaderContainer, CloseBtn, Logo, Texts, TextsH1, TextsSpan} from "./styles";
import {IconType} from "react-icons/lib/cjs/iconBase";
import {BiSupport} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import {ChatContext} from "../../context/ChatContext";

type IHeaderDefaultProps = {
    CompanyIcon?: IconType,
    companyName?: string,
    replyTimeText?: string
}

const headerDefaultProps: IHeaderDefaultProps = {
    CompanyIcon: undefined,
    companyName: 'Support',
    replyTimeText: 'Typically replies within a day'
}

const Header: React.FC<IHeaderDefaultProps> = ({companyName, replyTimeText, CompanyIcon}) => {
    !companyName && (companyName = headerDefaultProps.companyName);
    !replyTimeText && (replyTimeText = headerDefaultProps.replyTimeText);

    const {setIsChatOpen} = useContext(ChatContext)
    const handleOpen = () => {
        setIsChatOpen(false)
    }

    return (
        <HeaderContainer>
            <CloseBtn onClick={handleOpen}>
                <AiOutlineClose/>
            </CloseBtn>
            <Logo>
                {!CompanyIcon ? <BiSupport/> : <CompanyIcon/>}
            </Logo>
            <Texts>
                <TextsH1>{companyName}</TextsH1>
                <TextsSpan>{replyTimeText}</TextsSpan>
            </Texts>

        </HeaderContainer>
    )
}

export default Header;