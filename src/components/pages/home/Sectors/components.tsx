import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px;

  @media (max-width: 575px) {
		display: block;
	}
`;

export const Card = styled.div`
  position: relative;
  height: 250px;

  border-radius: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    border-radius: 15px;
  }

  & > div {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;

    display: flex;
    align-items: flex-end;

    padding: 15px 25px;

    font-family: "Parkson";
    color: var(--text-dark-color);
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));

    border-radius: 15px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);

    h3 {
      font-size: 2rem;
    }
  }

  @media (max-width: 575px) {
    height: 200px;
		margin-bottom: 30px;
	}
`;
