import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 20vh;
	width: 100vw;
	margin-top: 4rem;
	background-color: #9e5a63;

	@media (min-width: 811px) {
		height: 23vh;
		margin-top: 6rem;
	}
`;

export const Connect = styled.p`
	color: #fff;
	font-size: 0.8rem;

	@media (min-width: 811px) {
		font-size: 1.2rem;
	}
`;

export const Email = styled.a`
	color: #fff;
	font-size: 1rem;
	margin-top: 1rem;
	text-decoration: underline;

	@media (min-width: 811px) {
		font-size: 1rem;
	}
`;

export const LinksContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	width: 18rem;
	text-align: center;
	margin-top: 3.5rem;

	@media (min-width: 811px) {
		margin-top: 5rem;
		width: 20rem;
	}
`;

export const MediaLink = styled.a`
	color: #fff;
	font-size: 0.8rem;

	@media (min-width: 811px) {
		font-size: 1rem;
	}
`;

export const Brand = styled.p`
	color: #fff;
	font-size: 0.7rem;

	@media (min-width: 811px) {
		font-size: 0.8rem;
	}
`;
