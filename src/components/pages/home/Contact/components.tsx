import styled from "styled-components";

export const CallingCard = styled.div`
  position: relative;
  width: 45%;
  height: 100%;

  margin: 0 auto;
  padding: 40px 35px;

  background-color: var(--color-1);
  text-align: center;
  color: var(--primary-color-2);

  border-radius: 25px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.05);

  overflow: hidden;

  img {
    height: 150px;
    width: 150px;
    object-fit: cover;

    margin-bottom: 20px;

    border-radius: 50%;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  }

  h3 {
    margin-bottom: 10px;

    font-family: "Lato";
    font-size: 1.4rem;
    font-weight: bold;

    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  }

  p {
    color: var(--muted);
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

  hr {
    margin: 0 15px 35px;
  }

  a {
    align-items: center;
    margin-bottom: 10px;

    color: var(--secondary-color-2);
    font-size: 1.125rem;
    font-weight: bold;
    text-decoration: none;
    transition: 0.3s;

    i {
      margin-right: 10px;
    }

    &:hover {
      color: var(--primary-color);
    }
  }

  @media (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 575px) {
    width: 100%;

		margin-bottom: 30px;
    padding: 40px 20px;
	}
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;

  margin: 25px 0;
`;