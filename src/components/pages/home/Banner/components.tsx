import styled from "styled-components";

export const SectionWrapper = styled.section`
	width: 100%;
	height: 700px;
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

  border-bottom: 1px solid #333;

	z-index: 5;

	& > div:nth-child(2) {
    width: 100%;
    height: 100%;

    display: flex;
		justify-content: center;
		align-items: flex-end;

		position: absolute;
		top: 0;

    background-color: rgba(61, 94, 150, 0.4);

    & > div {
      width: 100%;
		  max-width: 1400px;
      height: 100%;

      display: flex;
		  justify-content: flex-start;
		  align-items: center;
    }
	}

	@media (max-width: 1024px) {
		height: 700px;
	}
	@media (max-width: 575px) {
		height: 500px;
	}
`;

export const BackgroundWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	position: relative;
	width: 100%;
	height: 100%;

	overflow-x: hidden;
	box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
`;

export const Background = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: 50% ${props => props.parallaxY};
	filter: brightness(30%);

	transition: 0.8s;

  @media (max-width: 575px) {
		object-position: 60% ${props => props.parallaxY};
	}
`;

export const Intro = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  flex-direction: column;

  width: 100%;
  height: 100%;

  margin: 0 50px 250px;
	
  img {
    height: 120px;
    width: auto;
    object-fit: cover;

    margin-bottom: 30px;
  }

	h1 {
    margin-bottom: 30px;

		font-size: 1.6rem;
    color: var(--text-dark-color);
    text-align: left;
	}

  @media (max-width: 575px) {
    margin: 0 25px 100px;

		img {
      height: 75px;
    };

    h1 {
      font-size: 1.2rem;
    }
	}
`;