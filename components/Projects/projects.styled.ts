import styled from 'styled-components';

import { ProjectStyledProps } from './types/projectStyledProps';

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
	color: #fff;
	font-size: 0.8rem;
	text-align: center;
	margin: 2rem 0 2rem 0;

	@media (min-width: 811px) {
		font-size: 1rem;
		margin: 4rem 0 4rem 0;
	}
`;

export const ProjectsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	height: 70vh;
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

	@media (min-width: 811px) {
	}
`;
