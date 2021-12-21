import styled from 'styled-components';

export const OuterContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	height: 100vh;
	width: 100vw;
	margin-top: 79.8px;

	@media (min-width: 810px) {
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

	@media (min-width: 810px) {
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

	@media (min-width: 810px) {
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

	@media (min-width: 810px) {
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

	@media (min-width: 810px) {
	}
`;

export const Img = styled.img`
	width: 345.6px;
	height: 190.03px;
	margin-top: 43px;

	@media (min-width: 810px) {
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

	@media (min-width: 810px) {
	}
`;
