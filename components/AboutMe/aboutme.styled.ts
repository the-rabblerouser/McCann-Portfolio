import styled from 'styled-components';

export const AboutContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 40vh;
	width: 100vw;
	background: ${({ theme }) => theme.primary};

	@media (min-width: 811px) {
	}
`;

export const Paragraph = styled.p`
	color: ${({ theme }) => theme.white};
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
		margin-top: 3rem;
		width: 50%;
	}
`;

export const MediaLink = styled.a`
	color: ${({ theme }) => theme.white};
	font-size: 1rem;

	&:hover {
		transition: 0.3s;
		color: ${({ theme }) => theme.secondary};
	}

	@media (min-width: 811px) {
	}
`;
