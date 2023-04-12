import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
	}

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

    font-family: "Lato";
    color: var(--text-dark-color);
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));

    border-radius: 15px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);

    h3 {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 575px) {
    height: 200px;
		margin-bottom: 30px;
	}
`;

export const CardAlt = styled.div`
  position: relative;

  padding: 30px;

  background-color: var(--color-1);
  text-align: center;
  color: var(--primary-color-2);

  border-radius: 25px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.05);

  overflow: hidden;

  h3 {
    display: flex;
    align-items: center;
    margin: 0;

    font-family: "Lato";
    font-size: 1.4rem;
    font-weight: bold;

    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);

    i {
      width: 30px;
      font-size: 1.8rem;
      margin-right: 10px;
    }
  }

  @media (max-width: 575px) {
		margin-bottom: 20px;
    padding: 15px 25px;

    h3 {
      font-size: 1.2rem;

      i {
        font-size: 1.6rem;
      }
    }
	}
`;
