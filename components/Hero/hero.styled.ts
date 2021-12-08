import styled from 'styled-components';

export const OuterContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	height: 40vh;
	width: 100vw;
	margin-top: 10vh;

	@media (min-width: 810px) {
	}
`;

export const Img = styled.img`
	height: 7rem;
	width: 7rem;
	margin: 5px;

	@media (min-width: 810px) {
		margin: 1rem;
	}
`;

export const Name = styled.p`
	color: ${({ theme }) => theme.white};
	font-size: 2rem;
	font-weight: 600;
	margin: 1rem 0 0 0;
	text-align: center;
	width: 100%;

	@media (min-width: 810px) {
	}
`;

export const About = styled.p`
	color: ${({ theme }) => theme.white};
	font-size: 0.9rem;
	margin: 1rem 0 0 0;
	text-align: center;
	width: 100%;

	@media (min-width: 810px) {
	}
`;
