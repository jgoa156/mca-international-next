import styled from "styled-components";

export const Card = styled.div<{ reverse: boolean }>`
  position: relative;
  display: flex;
  height: 100%;

  margin: 0 20px;
  padding: 50px;

  background-color: var(--color-1);
  color: var(--primary-color-2);

  border-radius: 25px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.05);

  overflow: hidden;

  & > div {
    width: 65%;
    
    padding-right: 50px;
  }

  h2 {
    display: flex;
    align-items: center;

    margin-bottom: 20px;

    font-family: "Parkson";
    font-size: 3.5rem;
    font-weight: bold;

    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);

    i {
      margin-right: 15px;
      margin-top: 6px;

      font-size: 2.5rem;
      background: -webkit-linear-gradient(180deg, var(--secondary-color), var(--secondary-color-2));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  p {
    color: var(--muted);

    &:last-child {
      margin-bottom: 0;
    }
  }

  img {
    position: absolute;
    top: 0;
    right: 0;

    width: 50%;
    height: 100%;
    object-fit: center;

    box-shadow: -5px -5px 10px rgba(0, 0, 0, 0.1);
  }
`;