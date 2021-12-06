import styled from 'styled-components';

export const OuterContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 95vh;
	width: 100vw;
	// background: green;

	@media (min-width: 811px) {
	}
`;

export const Img = styled.img`
	height: 6rem;
	width: 6rem;
	margin: 5px;

	@media (min-width: 811px) {
		height: 10rem;
		width: 10rem;
		margin: 1rem;
	}
`;

export const Name = styled.p`
	color: #fff;
	font-size: 2rem;
	margin: 1rem 0 0 0;
	text-align: center;
	width: 100%;

	@media (min-width: 811px) {
		font-size: 4rem;
	}
`;

export const About = styled.p`
	color: #fff;
	font-size: 1rem;
	margin: 1rem 0 0 0;
	text-align: center;
	width: 100%;

	@media (min-width: 811px) {
		font-size: 2rem;
	}
`;
