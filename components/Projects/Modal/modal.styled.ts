import styled from 'styled-components';

export const ModalContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
`;

export const ModalMain = styled.div`
	height: 24rem;
	width: 22rem;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;
	background-color: ${({ theme }) => theme.darkGrey};
	height: 55%;
	width: 95%;

	@media (min-width: 811px) {
		height: 65%;
		width: 40%;
	}
`;

export const Image = styled.img`
	height: 180px;
	width: 100%;

	@media (min-width: 811px) {
		height: 35vh;
	}
`;

export const Title = styled.p`
	color: ${({ theme }) => theme.white};
	font-size: 1.5rem;
	text-align: left;
	width: 100%;
	margin: 0.4rem;

	@media (min-width: 811px) {
		margin: 0.7rem;
	}
`;

export const Tools = styled.p`
	color: ${({ theme }) => theme.white};
	font-size: 0.8rem;
	text-align: left;
	width: 100%;
	margin: 0.4rem;

	@media (min-width: 811px) {
		margin: 0.7rem;
	}
`;

export const Hr = styled.hr`
	align-self: center;
	width: 97%;
	color: ${({ theme }) => theme.white};

	@media (min-width: 811px) {
	}
`;

export const ModalDescription = styled.p`
	color: ${({ theme }) => theme.white};
	font-size: 0.8rem;
	text-align: left;
	width: 90%;
	margin: 0.4rem;

	@media (min-width: 811px) {
		margin: 0.7rem;
		width: 80vw;
	}
`;

export const Link = styled.a`
	&:hover {
		transition: 0.3s;
		color: ${({ theme }) => theme.lightGreen};
	}

	@media (min-width: 811px) {
		margin: 0.8rem 0 0 0;
	}
`;
