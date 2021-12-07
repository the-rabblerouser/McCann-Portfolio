import styled from 'styled-components';

export const ModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
`;

export const ModalMain = styled.div`
	height: 370px;
	width: 370px;
	display: flex;
	flex-direction: column;
	justify-content: bottom;
	align-items: center;
	background-color: #9e5a63;

	@media (min-width: 811px) {
		height: 58vh;
		width: 45vw;
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
	color: #fff;
	font-size: 1.5rem;
	text-align: left;
	width: 100%;
	margin: 0.3rem 0 0 1rem;

	@media (min-width: 811px) {
		margin: 1rem 0 0 2rem;
	}
`;

export const Tools = styled.p`
	color: #fff;
	font-size: 0.8rem;
	text-align: left;
	width: 100%;
	margin: 0 0 0 1rem;

	@media (min-width: 811px) {
		margin: 0 0 0 2rem;
	}
`;

export const Hr = styled.hr`
	width: 350px;
	color: #fff;
	margin: 0.8rem 0 0 0;

	@media (min-width: 811px) {
		width: 43vw;
		margin: 0.8rem 0 0 0;
	}
`;

export const ModalDescription = styled.p`
	color: #fff;
	font-size: 0.8rem;
	text-align: left;
	width: 100%;
	margin: 1rem 0 0 1rem;

	@media (min-width: 811px) {
		margin: 1.8rem 0 0 2rem;
	}
`;
