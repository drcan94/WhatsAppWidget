import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: rgb(9, 94, 84);
  display: flex;
`;

export const CloseBtn = styled.span`
  color: #f0ffffa1;
  cursor: pointer;
  font-size: 1.5em;
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const Logo = styled.div`
  align-items: center;
  align-self: center;
  background: #fff;
  border-radius: 50%;
  color: cadetblue;
  display: flex;
  font-size: 2em;
  height: 45px;
  margin: 5px;
  justify-content: center;
  padding: 10px;
  width: 45px;
`;

export const Texts = styled.div`
  color: rgb(255, 255, 255);
  margin-left: 16px;
  margin-right: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TextsH1 = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  display: block;
`;
export const TextsSpan = styled.span`
  font-size: 13px;
  line-height: 18px;
  margin-top: 4px;
`;