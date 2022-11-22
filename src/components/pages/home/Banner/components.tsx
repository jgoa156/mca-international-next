import styled from "styled-components";
import { Dropdown } from "react-bootstrap";

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
		max-width: 1600px;
    height: 100%;
		position: absolute;
		top: 0;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (max-width: 1024px) {
		height: 700px;
	}
	@media (max-width: 575px) {
		height: 600px;
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
  justify-content: center;
  align-items: flex-end;

  width: 100%;
  height: 100%;
	
	h1 {
    text-align: center;

		font-size: 5rem;
		font-family: "Parkson";
    color: var(--text-dark-color);

    margin-bottom: -300px;
	}
`;