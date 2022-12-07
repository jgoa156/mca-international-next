import styled from 'styled-components';

const Title = styled.h2`
	margin-bottom: 50px;
	
	color: var(--primary-color-2);
	font-size: 2.6rem;
	font-family: "Parkson";
	text-align: center;
	white-space: nowrap;
	overflow: hidden;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	&:after {
		width: 50px;
		height: 2px;
		display: block;

		background-image: linear-gradient(to right, var(--secondary-color-2), var(--secondary-color));
		content: "";
	};

  @media (max-width: 575px) {
		font-size: 2.2rem;
	}
`;

export default Title;