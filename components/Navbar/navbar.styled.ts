import styled from 'styled-components';

export const OuterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 2rem;
	width: 100vw;

	@media (min-width: 811px) {
		height: 2rem;
		width: 80vw;
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
		justify-content: end;
		width: 80vw;
	}
`;

export const NavLinks = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 55vw;
	height: 100%;

	@media (min-width: 811px) {
		width: 15vw;
	}
`;

export const Diamond = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	width: 30px;
	margin: 5rem 3rem 0 0;
	text-align: center;
	transform: rotate(45deg);
	background: #97aabd;
	box-shadow: 7px 4px #000;
	cursor: pointer;

	@media (min-width: 811px) {
		height: 2.5rem;
		width: 2.5rem;
		margin: 5rem 0 0 0;
	}
`;

export const DiamondText = styled.span`
	transform: rotate(-45deg);
	color: #fff;
	fontsize: 1.5rem;
	cursor: pointer;

	@media (min-width: 811px) {
	}
`;

export const Projects = styled.a`
	background: none;
	border: none;
	color: #fff;
	font-size: 1rem;

	@media (min-width: 811px) {
	}
`;

export const Contact = styled.a`
	color: #fff;
	font-size: 1rem;

	@media (min-width: 811px) {
	}
`;
