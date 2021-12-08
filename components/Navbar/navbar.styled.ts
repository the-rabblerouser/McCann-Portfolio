import styled from 'styled-components';

export const OuterContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 2rem;
	width: 100vw;

	@media (min-width: 811px) {
		height: 10rem;
	}
`;

export const InnerContainer = styled.div`
	display: flex;
	justify-content: end;
	align-items: center;
	width: 80vw;
	margin-top: 5rem;

	@media (min-width: 811px) {
		display: flex;
		justify-content: space-evenly;
		width: 50vw;
	}
`;

export const Projects = styled.a`
	background: none;
	border: none;
	color: #fff;
	font-size: 1.2rem;

	@media (min-width: 811px) {
	}
`;

export const Contact = styled.a`
	color: #fff;
	font-size: 1.2rem;

	@media (min-width: 811px) {
	}
`;
