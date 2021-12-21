import styled from 'styled-components';

export const AboutContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: start;
	height: 70vh;
	width: 100vw;
	overflow: hidden;

	@media (min-width: 810px) {
	}
`;

export const AboutMe = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 64.47px;
	margin: 7px 0 0 0;
	background: ${({ theme }) => theme.darkGrey};
	color: ${({ theme }) => theme.white};
	font-size: 18px;
	line-height: 21px;
	text-align: center;
	letter-spacing: 1.35px;

	@media (min-width: 765px) {
		width: 50vw;
		margin: 1rem 0 0 2rem;
		text-align: center;
	}
`;

export const ToolsContainerOne = styled.div`
	display: flex;
	align-items: center;
	justify-content: start;
	height: 50px;
	width: 100vw;
	margin: 0 0 0 1rem;

	@media (min-width: 810px) {
		margin: 0 0 0 4rem;
	}
`;

export const ToolsContainerTwo = styled.div`
	display: flex;
	align-items: center;
	justify-content: start;
	height: 50px;
	width: 100vw;
	margin: 0 0 0 3rem;

	@media (min-width: 810px) {
		margin: 0 0 0 8rem;
	}
`;

export const Tool = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 103.97px;
	height: 50px;
	background: ${({ color }) => color};
	color: ${({ theme }) => theme.white};
	font-size: 12px;
	line-height: 14px;
	text-align: center;
	letter-spacing: 1.35px;

	@media (min-width: 810px) {
	}
`;

export const CheckOut = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 64.47px;
	margin: 0;
	background: ${({ theme }) => theme.lightGrey};
	color: ${({ theme }) => theme.white};
	font-size: 18px;
	line-height: 21px;
	text-align: center;
	letter-spacing: 1.35px;

	@media (min-width: 765px) {
		width: 50%;
		margin: 0 0 0 4rem;
		text-align: center;
	}
`;

export const LinksContainer = styled.div`
	align-self: center;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	width: 259.91px;
	height: 50.86px;
	background: ${({ theme }) => theme.black};
	text-align: center;

	@media (min-width: 765px) {
		align-self: start;
		margin: 0 0 0 10rem;
	}
`;

export const MediaLink = styled.a`
	color: ${({ theme }) => theme.white};
	font-size: 1rem;

	&:hover {
		transition: 0.3s;
		color: ${({ theme }) => theme.lightGreen};
	}

	@media (min-width: 765px) {
	}
`;

export const WebDeveloper = styled.p`
	align-self: center;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 375px;
	height: 78px;
	margin: 3rem 0 0 0;
	color: ${({ theme }) => theme.white};
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	line-height: 42px;
	text-align: center;
	letter-spacing: 1.35px;

	@media (min-width: 765px) {
		align-self: end;
		margin: 3rem 0 0 0;
		text-align: left;
	}
`;

export const ProjectsButton = styled.a`
	align-self: center;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 200px;
	height: 71px;
	margin: 48px 0 0 0;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 21px;
	letter-spacing: 1.35px;
	color: ${({ theme }) => theme.white};
	background-color: ${({ theme }) => theme.lightGreen};
	border: none;
	// box-shadow: 2px 2px ${({ theme }) => theme.white};
	transition: 0.6s;
	cursor: pointer;

	&:hover {
		transition: 0.6s;
		background-color: ${({ theme }) => theme.darkGreen};
	}

	@media (min-width: 765px) {
		margin: 8rem 0 0 0;
	}
`;
