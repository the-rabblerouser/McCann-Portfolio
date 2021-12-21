import styled from 'styled-components';

export const OuterContainer = styled.div`
	height: 11vh;
	width: 100vw;
	margin-top: 2rem;

	@media (min-width: 765px) {
	}

	@media (min-width: 1440px) {
	}
`;

export const NavLinks = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 3rem;
	width: 100%;
	height: 100%;

	@media (min-width: 765px) {
		justify-content: end;
	}

	@media (min-width: 1440px) {
	}
`;

export const Brand = styled.p`
	display: none;

	@media (min-width: 765px) {
		order: 1;
		margin-right: auto;
		margin-left: 44px;
		font-style: italic;
		font-weight: 500;
		font-size: 12px;
		line-height: 16px;
		display: flex;
		align-items: center;
		text-align: center;
		letter-spacing: 1.35px;
		text-transform: uppercase;
		color: ${({ theme }) => theme.white};
	}

	@media (min-width: 1440px) {
		font-size: 18px;
	}
`;

export const Img = styled.img`
	order: 2;
	width: 85.2px;
	height: 85.2px;
	border: 1px solid white;
	border-radius: 100%;

	@media (min-width: 765px) {
		order: 4;
		margin: 0 3rem 0 0;
	}

	@media (min-width: 1440px) {
		width: 106px;
		height: 106px;
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

	@media (min-width: 765px) {
	}

	@media (min-width: 1440px) {
		font-size: 18px;
	}
`;

export const Contact = styled.a`
	order: 3;
	color: ${({ theme }) => theme.white};
	font-size: 1rem;

	&:hover {
		transition: 0.3s;
		color: ${({ theme }) => theme.lightGreen};
	}

	@media (min-width: 765px) {
		order: 2;
	}

	@media (min-width: 1440px) {
		font-size: 18px;
	}
`;
