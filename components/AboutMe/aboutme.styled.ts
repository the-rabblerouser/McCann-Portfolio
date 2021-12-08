import styled from 'styled-components';

export const AboutContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 35vh;
	width: 100vw;
	background: #c96567;

	@media (min-width: 811px) {
	}
`;

export const Paragraph = styled.p`
	color: #fff;
	font-size: 1rem;
	text-align: justify;
	width: 90%;
	margin: 0.5rem 0 0 0;

	@media (min-width: 811px) {
		text-align: center;
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
	font-size: 1rem;

	&:hover {
		transition: 0.3s;
		color: #97aabd;
	}

	@media (min-width: 811px) {
	}
`;
