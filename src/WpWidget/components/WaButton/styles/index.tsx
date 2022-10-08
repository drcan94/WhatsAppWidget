import styled from "styled-components";

export const WaButtonContainer = styled.div`
  align-items: center;
  align-self: flex-end;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.15) 0 3px 12px;
  color: rgb(79, 206, 93);
  cursor: pointer;
  display: flex;
  font-size: 2em;
  height: 64px;
  justify-content: center;
  outline: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  width: 64px;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  position: fixed;
  bottom: 25px;
  right: 25px;
  transition: 0.2s ease;
  &:hover {
    background-color: #5ad167;
  }
  &:hover svg {
    fill: #fff;
  }
  @media (max-width: 480px) {
    width: 48px;
    height: 48px;
    font-size: 1.5em;
  }
`;