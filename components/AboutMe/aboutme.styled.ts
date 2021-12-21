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

interface AboutTypes {
	margin: string;
	color: string;
}

export const AboutMe = styled.p<AboutTypes>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 64.47px;
	margin: ${({ margin }) => margin};
	background: ${({ color }) => color};
	color: ${({ theme }) => theme.white};
	font-size: 18px;
	line-height: 21px;
	text-align: center;
	letter-spacing: 1.35px;

	@media (min-width: 810px) {
		text-align: center;
		margin: 2rem 0 0 0;
	}
`;

interface ToolTypes {
	margin: string;
}

export const ToolsContainer = styled.div<ToolTypes>`
	display: flex;
	align-items: center;
	justify-content: start;
	height: 50px;
	width: 100vw;
	margin: ${({ margin }) => margin};

	@media (min-width: 810px) {
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

	@media (min-width: 810px) {
	}
`;

export const MediaLink = styled.a`
	color: ${({ theme }) => theme.white};
	font-size: 1rem;

	&:hover {
		transition: 0.3s;
		color: ${({ theme }) => theme.lightGreen};
	}

	@media (min-width: 811px) {
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

	@media (min-width: 810px) {
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

	@media (min-width: 811px) {
	}
`;
