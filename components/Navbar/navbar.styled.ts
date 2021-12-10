import styled from 'styled-components';

interface NavProps {
	toggle: boolean;
}

export const OuterContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 10vh;
	width: 100vw;

	@media (min-width: 811px) {
		width: 90vw;
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

export const Diamond = styled.div<NavProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	width: 30px;
	margin: 0 0 0 0;
	transition-duration: 1s;
	transform: ${({ toggle }) => (toggle ? 'rotate(-90deg)' : 'rotate(45deg)')};
	background: ${({ theme }) => theme.secondary};
	box-shadow: ${({ toggle }) => (toggle ? '-5px 6px #000' : '7px 4px #000')};
	cursor: pointer;

	@media (min-width: 811px) {
		height: 2.5rem;
		width: 2.5rem;
	}
`;

export const DiamondText = styled.span<NavProps>`
	color: ${({ theme }) => theme.white};
	fontsize: 1.5rem;
	transition-duration: 1s;
	transform: ${({ toggle }) => (toggle ? 'rotate(90deg)' : 'rotate(-45deg)')};
	cursor: pointer;

	@media (min-width: 811px) {
	}
`;

export const NavLinks = styled.div<NavProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 60%;
	height: 100%;
	transition: transform 0.7s, opacity 0.1s;
	transform: ${({ toggle }) =>
		toggle ? 'translateX(0px)' : 'translateX(40px)'};
	opacity: ${({ toggle }) => (toggle ? 1 : 0)};

	@media (min-width: 811px) {
		justify-content: -webkit-end;
	}
`;

export const Projects = styled.a`
	background: none;
	border: none;
	color: ${({ theme }) => theme.white};
	font-size: 1rem;
	margin-left: 8rem;

	&:hover {
		transition: 0.3s;
		color: ${({ theme }) => theme.primary};
	}

	@media (min-width: 811px) {
		margin-left: 10rem;
	}
`;

export const Contact = styled.a`
	color: ${({ theme }) => theme.white};
	font-size: 1rem;
	margin-left: 3rem;
	margin-right: 4rem;

	&:hover {
		transition: 0.3s;
		color: ${({ theme }) => theme.primary};
	}

	@media (min-width: 810px) {
		margin-left: 4rem;
		margin-right: -20rem;
	}

	@media (min-width: 811px) {
		margin-left: 4rem;
		margin-right: -4rem;
		-webkit-margin-end: -40rem;
	}
`;
