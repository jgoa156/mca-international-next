import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 575px) {
    flex-direction: column;
		align-items: center;
	}
`;

export const Text = styled.div`
  width: 35%;

  h2 {
    margin-bottom: 20px;

    color: var(--primary-color-2);
    font-family: "Parkson";
    font-size: 2rem;
    font-weight: bold;

    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  }

  p, ul {
    color: var(--muted);
  }

  @media (max-width: 575px) {
		width: 100%;

    margin-bottom: 30px;
	}
`;

export const Image = styled.img`
  width: 330px;
  height: 330px;
  object-fit: cover;

  border-radius: 50%;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 575px) {
		width: 260px;
    height: 260px;
	}
`;

export const ServiceCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;
`;

export const ServiceCard = styled.div`
  display: flex;
  align-items: center;

  padding: 15px 25px;

  background-color: var(--color-1);
  color: var(--primary-color-2);

  border-radius: 15px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.05);

  overflow: hidden;
  
  i {
    margin-right: 15px;
    font-size: 1.6rem;
  }

  h4 {
    margin: 0;
    font-size: 1rem;
    font-weight: bold;

    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const Pipeline = styled.div`
  margin: 50px 0;

  color: var(--primary-color-2);

  & > div {
    display: grid;
    grid-template-columns: 1fr 10px 1fr 10px 1fr 10px 1fr 10px 1fr;
    justify-content: center;
    align-items: center;
  }
`;

export const Process = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  i {
    color: var(--secondary-color);
    font-size: 3rem;
    margin-bottom: 15px;
  }

  h4 {
    font-family: "Parkson";
    font-size: 2rem;
  }
`;

export const Separator = styled.i`
  font-size: 2rem;
`;