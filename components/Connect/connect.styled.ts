import styled from 'styled-components';

import { ConnectStyledProps } from './connectStyledProps';

export const Container = styled.div<ConnectStyledProps>`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 20vh;
	width: 100vw;
	@media (min-width: 810px) {
		height: 20vh;
	}
`;

export const ConnectParagraph = styled.p`
	color: ${({ theme }) => theme.white};
	font-size: 1rem;

	@media (min-width: 810px) {
		font-size: 1.2rem;
	}
`;

export const Email = styled.a`
	color: ${({ theme }) => theme.white};
	font-size: 1rem;
	margin-top: 0.4rem;
	text-decoration: underline;

	&:hover {
		transition: 0.3s;
		color: ${({ theme }) => theme.primary};
	}

	@media (min-width: 810px) {
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

	@media (min-width: 810px) {
		margin-top: 5rem;
		width: 20rem;
	}
`;

export const MediaLink = styled.a`
	color: ${({ theme }) => theme.white};
	font-size: 0.8rem;

	&:hover {
		transition: 0.3s;
		color: ${({ theme }) => theme.primary};
	}

	@media (min-width: 810px) {
		font-size: 1rem;
	}
`;

export const Brand = styled.p`
	color: ${({ theme }) => theme.white};
	font-size: 0.7rem;

	@media (min-width: 810px) {
		font-size: 0.8rem;
	}
`;
