import styled from 'styled-components';

export const OuterContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 5rem;
	width: 100vw;

	@media (min-width: 811px) {
	}
`;

export const InnerContainer = styled.div`
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	height: 100%;
	@media (min-width: 811px) {
	}
`;

export const Diamond = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	width: 30px;
	margin: 0 0 0 0;
	transition-duration: 1s;
	transform: rotate(45deg);
	background: #97aabd;
	box-shadow: 7px 4px #000;
	cursor: pointer;

	${InnerContainer}:hover & {
		transition-duration: 1s;
		transform: rotate(-90deg);
		box-shadow: -5px 6px #000;
	}

	@media (min-width: 811px) {
		height: 2.5rem;
		width: 2.5rem;
		margin: 5rem 0 0 0;
	}
`;

export const DiamondText = styled.span`
	transition-duration: 1s;
	transform: rotate(-45deg);
	color: #fff;
	fontsize: 1.5rem;
	cursor: pointer;

	${InnerContainer}:hover & {
		fontsize: 1.5rem;
		transform: rotate(90deg);
	}

	@media (min-width: 811px) {
	}
`;

export const NavLinks = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 60%;
	height: 100%;
	transition-duration: 1s;
	transform: translateX(-400px);

	${InnerContainer}:hover & {
		transform: translateX(0px);
	}

	@media (min-width: 811px) {
		width: 15vw;
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
