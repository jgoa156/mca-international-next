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
		max-width: 1400px;
		
		padding: 50px 50px;

		@media (max-width: 1024px) {
			padding: 50px 35px;
		}
	}
  
  &:last-child > div {
    padding-bottom: 50px;
  }
`;