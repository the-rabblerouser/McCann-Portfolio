import styled from 'styled-components';

import { ProjectStyledProps } from './types/projectStyledProps';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 90vh;
	width: 100vw;

	@media (min-width: 811px) {
		height: 100vh;
	}
`;

export const Title = styled.p`
	color: ${({ theme }) => theme.white};
	font-size: 0.8rem;
	text-align: center;
	margin: 2rem 0 1rem 0;

	@media (min-width: 811px) {
		font-size: 1.5rem;
		margin: 4rem 0 1rem 0;
	}
`;

export const ProjectsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	height: 100%;
	width: 100vw;

	@media (min-width: 811px) {
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		height: 100vh;
	}
`;

export const Project = styled.div<ProjectStyledProps>`
	position: relative;
	height: 100%;
	width: 100%;
	background: url(${({ image }) => image}) no-repeat;
	background-size: 100% 100%;
	border: none;
	opacity: 0.7;
	cursor: pointer;

	&:hover {
		transition: 1s;
		opacity: 1;
	}

	@media (min-width: 811px) {
	}
`;

// Styled Components for Projects Button on Home Page

export const ProjectsButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 20vh;
	width: 100vw;

	@media (min-width: 811px) {
		height: 35vh;
	}
`;

export const ProjectsButton = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.6s;
	color: ${({ theme }) => theme.white};
	font-size: 0.8rem;
	background-color: ${({ theme }) => theme.lightBlue};
	border: none;
	height: 3rem;
	width: 8rem;
	box-shadow: 6px 5px #000;
	cursor: pointer;

	&:hover {
		transition: 0.6s;
		background-color: ${({ theme }) => theme.red};
		color: ${({ theme }) => theme.white};
	}

	@media (min-width: 811px) {
		font-size: 1rem;
		height: 4rem;
		width: 12rem;
	}
`;
