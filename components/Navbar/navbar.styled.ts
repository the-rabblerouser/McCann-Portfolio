import styled from 'styled-components';

export const OuterContainer = styled.div`
	height: 11vh;
	width: 100vw;
	margin-top: 2rem;

	@media (min-width: 811px) {
		width: 90vw;
	}
`;

export const NavLinks = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 100%;

	@media (min-width: 811px) {
		justify-content: -webkit-end;
	}
`;

export const Img = styled.img`
	order: 2;
	width: 85.2px;
	height: 85.2px;
	border: 1px solid white;
	border-radius: 100%;

	@media (min-width: 810px) {
		margin: 1rem;
	}
`;

export const Projects = styled.a`
	order: 1;
	background: none;
	border: none;
	color: ${({ theme }) => theme.white};
	font-size: 1rem;

	&:hover {
		transition: 0.3s;
		color: ${({ theme }) => theme.lightGreen};
	}

	@media (min-width: 811px) {
	}
`;

export const Contact = styled.a`
	order: 3;
	color: ${({ theme }) => theme.white};
	font-size: 1rem;

	&:hover {
		transition: 0.3s;
		color: ${({ theme }) => theme.primary};
	}
`;
