import styled from 'styled-components';

export const OuterContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: start;
	height: 89vh;
	width: 100vw;
	margin: 79.8px 0 0 0;

	@media (min-width: 765px) {
	}
`;

export const Name = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 345.6px;
	height: 85.2px;
	margin: 0 0 0 0;
	color: ${({ theme }) => theme.white};
	background-color: ${({ theme }) => theme.lightGrey};
	font-style: normal;
	font-weight: normal;
	font-size: 36px;
	line-height: 42px;
	text-align: center;

	@media (min-width: 765px) {
		width: 449px;
		height: 110px;
		margin: 0 0 0 44px;
	}
`;

export const WebDev = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 213.6px;
	height: 50.4px;
	margin: 0 5rem 0 0;
	color: ${({ theme }) => theme.white};
	font-size: 12px;
	line-height: 12px;
	text-align: center;
	background-color: ${({ theme }) => theme.lightGreen};

	@media (min-width: 765px) {
		width: 277px;
		height: 65.52px;
		margin: 0 0 0 77px;
		font-size: 14px;
	}
`;

export const NYC = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 213.6px;
	height: 50.4px;
	margin: 0 0 0 5rem;
	color: ${({ theme }) => theme.white};
	font-size: 12px;
	line-height: 12px;
	text-align: center;
	background-color: ${({ theme }) => theme.darkGrey};

	@media (min-width: 765px) {
		width: 277px;
		height: 65.52px;
		margin: 0 0 0 144px;
		font-size: 14px;
	}
`;

export const IconContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: start;
	justify-content: start;
	width: 298px;
	height: 47px;
	margin: 43.4px 36px 0 0;
	padding-top: 14.62px;
	gap: 20px;
	border-top: 1px solid ${({ theme }) => theme.white};
	color: ${({ theme }) => theme.white};

	@media (min-width: 765px) {
		width: 449px;
		margin: 43.4px 0 0 44px;
		padding-top: 28px;
	}
`;

export const Img = styled.img`
	width: 345.6px;
	height: 190.03px;
	margin-top: 43px;

	@media (min-width: 765px) {
		align-self: center;
		width: 725px;
		height: 390px;
	}
`;

export const ArrowContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 32px;
	width: 100vw;
	margin-top: 61px;
	color: ${({ theme }) => theme.white};

	@media (min-width: 765px) {
		margin-top: 31px;
	}
`;
