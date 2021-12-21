import styled from 'styled-components';

import { ProjectStyledProps } from './types/projectStyledProps';
import { BodyProps } from './types/BodyProps';

export const Body = styled.body<BodyProps>`
	position: ${({ showModal }) => (showModal ? 'fixed' : '')};

	@media (min-width: 811px) {
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 80vh;
	width: 100vw;

	@media (min-width: 811px) {
		height: 100vh;
	}
`;

export const Title = styled.p`
	color: ${({ theme }) => theme.white};
	font-size: 0.8rem;
	text-align: center;
	margin: 1rem 0 1rem 0;

	@media (min-width: 811px) {
		font-size: 1.5rem;
		margin: 0rem 0 1rem 0;
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
		height: 85vh;
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
