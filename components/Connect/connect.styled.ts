import styled from 'styled-components';

import { ConnectStyledProps } from './connectStyledProps';

export const Container = styled.div<ConnectStyledProps>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	height: 20vh;
	width: 100vw;

	@media (min-width: 765px) {
	}

	@media (min-width: 1440px) {
		height: 40vh;
	}
`;

export const ConnectParagraph = styled.p`
	align-self: center;
	width: 360px;
	height: 44px;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 25px;
	text-align: center;
	margin: 25px 0 0 0;
	color: ${({ theme }) => theme.white};

	@media (min-width: 765px) {
		width: 540px;
		height: 66px;
		margin: 0 0 0 0;
		font-size: 24px;
	}

	@media (min-width: 1440px) {
		margin: 6rem 0 0 0;
	}
`;

export const Email = styled.a`
	width: 360px;
	height: 18px;
	margin: 48px 0 0 0;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 25px;
	text-align: center;
	color: ${({ theme }) => theme.white};

	&:hover {
		text-decoration: underline;
		color: ${({ theme }) => theme.lightGreen};
		transition: text-decoration 0.3s, color 0.3s;
	}

	@media (min-width: 765px) {
		font-size: 24px;
	}

	@media (min-width: 1440px) {
	}
`;

export const LinksContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	width: 375px;
	height: 32px;
	margin: 15% 0 0 0;
	text-align: center;

	@media (min-width: 765px) {
		margin-top: rem;
		width: 50%;
		font-size: 18px;
	}

	@media (min-width: 1440px) {
		margin: 5% 0 0 0;
	}
`;

export const MediaLink = styled.a`
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 16px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 1.35px;
	color: ${({ theme }) => theme.white};

	&:hover {
		transition: 0.3s;
		color: ${({ theme }) => theme.lightGreen};
	}

	@media (min-width: 765px) {
		font-size: 18px;
	}

	@media (min-width: 1440px) {
	}
`;

export const Brand = styled.p`
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

	@media (min-width: 765px) {
	}

	@media (min-width: 1440px) {
		font-size: 18px;
	}
`;
