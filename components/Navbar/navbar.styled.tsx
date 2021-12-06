import styled from 'styled-components';

export const OuterContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100vw;

	@media (min-width: 500px) {
		justify-content: center;
	}
`;

export const InnerContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	height: 5rem;
	width: 50%;

	@media (min-width: 500px) {
		width: 20%;
	}
`;

export const Img = styled.img`
	border: 1px solid #fff;
	height: 4rem;
	width: 4rem;
	margin: 5px;
`;