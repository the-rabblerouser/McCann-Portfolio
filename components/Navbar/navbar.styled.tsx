import styled from 'styled-components';

export const OuterContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 5rem;
	width: 100vw;

	@media (min-width: 811px) {
		height: 10rem;
	}
`;

export const InnerContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 100vw;

	@media (min-width: 811px) {
		display: flex;
		justify-content: space-evenly;
		width: 50vw;
	}
`;

export const Projects = styled.button`
	background: none;
	border: none;
	color: #fff;
	font-size: 1.2rem;

	@media (min-width: 811px) {
		font-size: 2rem;
	}
`;

export const Contact = styled.a`
	color: #fff;
	font-size: 1.2rem;

	@media (min-width: 811px) {
		font-size: 2rem;
	}
`;
