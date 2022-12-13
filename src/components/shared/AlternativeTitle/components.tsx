import styled from 'styled-components';

export const AlternativeTitleStyled = styled.h2`
	display: flex;
  align-items: center;

  margin-bottom: 50px;

  color: var(--primary-color-2);
  font-family: "Lato";
  font-size: 1.6rem;
  font-weight: bold;

  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);

  i {
    margin-right: 15px;

    background: -webkit-linear-gradient(180deg, var(--secondary-color), var(--secondary-color-2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;