import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  height: ${({ height }) => height ? height : "50px"};
  width: auto;

  margin: 0 25px 40px;
`;