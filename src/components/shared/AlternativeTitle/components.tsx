import styled from 'styled-components';

export const AlternativeTitleStyled = styled.h2`
	display: flex;
  align-items: center;

  margin-bottom: 50px;

  color: var(--primary-color-2);
  font-family: "Parkson";
  font-size: 2.6rem;
  font-weight: bold;

  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);

  i {
    margin-right: 15px;
    margin-top: 6px;

    font-size: 2rem;
    background: -webkit-linear-gradient(180deg, var(--secondary-color), var(--secondary-color-2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 575px) {
		font-size: 2.2rem;

    i {
      font-size: 1.6rem;
    }
	}
`;