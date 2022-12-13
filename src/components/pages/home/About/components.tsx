import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  grid-gap: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: 65%;
	}

  @media (max-width: 575px) {
		display: block;
	}
`;

export const Card = styled.div`
  position: relative;
  height: 100%;

  padding: 40px 35px;

  background-color: var(--color-1);
  text-align: center;
  color: var(--primary-color-2);

  border-radius: 25px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.05);

  overflow: hidden;
  
  i {
    margin-bottom: 40px;
    font-size: 3.5rem;
  }

  h3 {
    margin-bottom: 20px;

    font-family: "Lato";
    font-size: 1.4rem;
    font-weight: bold;

    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  }

  p {
    color: var(--muted);
    margin-bottom: 0;
  }

  &:after {
    position: absolute;
    top: -35px;
    left: -10px;

    height: 100px;
    width: 50px;

    background: linear-gradient(180deg, var(--secondary-color), var(--secondary-color-2));
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.05);
    content: "";

    transform: rotate(45deg);
  }

  @media (max-width: 575px) {
		margin-bottom: 30px;
    padding: 40px 20px;
	}
`;
