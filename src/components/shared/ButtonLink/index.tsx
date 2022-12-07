import styled from "styled-components";

const ButtonLink = styled.a`
  display: flex;
  align-items: center;
  padding: 10px 35px;

  color: var(--text-dark-color);
  font-size: 1.125rem;
  font-weight: bold;
  text-decoration: none;
  
  background: var(--secondary-color-2);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);

  border-radius: 25px;

  transition: 0.3s;

  i {
    margin-right: 10px;
  }

  &:hover {
    color: var(--text-dark-color);
    background: var(--secondary-color);
  }
`;

export default ButtonLink;