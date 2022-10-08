import styled from "styled-components";

export const ChatBoxContainer = styled.div`
  padding: 20px 20px 20px 20px;
  background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
  background-size: cover;
  position: relative;
  overflow: auto;
  max-height: 382px;
`;


export const Message = styled.div`
  padding: 7px 14px 6px;
  background-color: rgb(255, 255, 255);
  border-radius: 0 8px 8px;
  position: relative;
  transition: all 0.3s ease 0s;
  transform-origin: center top;
  box-shadow: rgba(0, 0, 0, 0.13) 0 1px 0.5px;
  margin-top: 4px;
  max-width: calc(100% - 120px);
`;

export const TriangleTopRight = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 20px 20px 0;
  border-color: transparent #ffffff transparent transparent;
  position: absolute;
  left: -10px;
  top: 0;
`;


export const MessageTitle = styled.span`
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.4);
`;

export const MessageBody = styled.p`
  font-size: 14px;
  line-height: 19px;
  margin-top: 4px;
  color: rgb(17, 17, 17);
  white-space: pre-wrap;
`;

export const MessageTime = styled.span`
  display: flex;
  margin-top: 4px;
  font-size: 12px;
  line-height: 16px;
  color: rgba(17, 17, 17, 0.5);
  justify-content: flex-end;
`;