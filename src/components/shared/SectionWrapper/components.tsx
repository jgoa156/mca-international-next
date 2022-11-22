import styled from "styled-components";

export const SectionWrapperComponent = styled.section`
  width: 100%;
	height: fit-content;
	position: relative;
	overflow: hidden;

	display: flex;
	justify-content: center;
	align-items: center;

	& > div {
		width: 100%;
		max-width: 1600px;
		
		padding: 150px 50px 0;

		@media (max-width: 1024px) {
			padding: 50px 20px 0;
		}
	}
`;