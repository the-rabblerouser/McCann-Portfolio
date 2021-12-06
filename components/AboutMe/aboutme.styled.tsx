import styled from 'styled-components';

export const AboutContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 50vh;
	width: 100vw;
	background: #c96567;

	@media (min-width: 811px) {
		height: 80vh;
	}
`;

export const Paragraph = styled.p`
	color: #fff;
	font-size: 1rem;
	text-align: center;
	width: 90%;
	margin: 1rem 0 0 0;

	@media (min-width: 811px) {
		font-size: 2rem;
		margin: 2rem 0 0 0;
	}
`;

export const LinksContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	text-align: center;
	margin-top: 3.5rem;
	width: 22rem;

	@media (min-width: 811px) {
		margin-top: 7rem;
		width: 50%;
	}
`;

export const MediaLink = styled.a`
	color: #fff;
	font-size: 0.8rem;

	@media (min-width: 811px) {
		font-size: 1.6rem;
	}
`;
