import styled, {keyframes} from "styled-components";


const CustomAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;


export const WidgetContainer = styled.div<{open:boolean}>`
  width: 360px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 12px 24px 0;
  flex-direction: column;
  border-radius: 15px;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  transform: translate3d(0px, 0px, 0px);
  touch-action: auto;
  display: ${({ open }) => (open ? "flex" : "none")};
  animation: ${CustomAnimation} 250ms ease-in-out both;
  position: fixed;
  bottom: 110px;
  right: 25px;
  @media (max-width: 480px) {
    bottom: 85px;
    width: 270px;
  }
`;

