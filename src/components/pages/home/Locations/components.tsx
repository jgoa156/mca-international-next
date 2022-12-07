import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;

  @media (max-width: 575px) {
		display: block;
	}
`;

export const Card = styled.div`
  position: relative;
	width: 100%;
	height: 100%;

	background-color: var(--text-dark-color);
	border-radius: 15px;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.05);

	transition: 0.3s;

	img {
		width: 100%;
		height: 250px;

		border-radius: 15px 15px 0 0;
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
		object-fit: cover;
	}

	& > div {
		padding: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		text-align: center;

		h4 {
      font-weight: bold;
			font-size: 1.125rem;

      a {
        color: var(--secondary-color-2);
        text-decoration: none;
        transition: 0.3s;

        &:hover {
          color: var(--primary-color);
        }

        i {
          margin-left: 10px;
        }
      }
		}

		p {
			color: var(--muted);
			font-size: 0.875rem;
      margin-bottom: 0;
		}
	}

  & > div.hover {
    position: absolute;
    top: 0;
    left: 0;
    height: 250px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    border-radius: 15px 15px 0 0;

    transition: 0.3s;

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 575px) {
		margin-bottom: 30px;

    img, & > div.hover {
      height: 200px;
    }
	}
`;
