import type { NextPage } from 'next';

import styled from 'styled-components';
import Particles from 'react-tsparticles';

// import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';

import { particleOptions } from '../utils/particleOptions';

const AppContainer = styled.div`
	position: absolute;
	top: 0;
	padding-top: 0 @media (min-width: 811px) {

	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 90vh;
	width: 100vw;

	@media (min-width: 811px) {
	}
`;

const Title = styled.p`
	color: #fff;
	font-size: 0.8rem;
	text-align: center;
	margin: 2rem 0 2rem 0;

	@media (min-width: 811px) {
		font-size: 4rem;
		margin: 4rem 0 4rem 0;
	}
`;

const ProjectsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	height: 80vh;
	width: 100vw;

	@media (min-width: 811px) {
	}
`;

const Project = styled.div`
	height: 100%;
	width: 100%;
	background: #fff;
	border: 1px solid black;

	@media (min-width: 811px) {
	}
`;

const Home: NextPage = () => {
	return (
		<>
			<Particles id='tsparticles' options={particleOptions} />
			<AppContainer>
				{/* <Navbar /> */}
				<Hero />
				<AboutMe />
				<Container>
					<Title>Check out some of my personal projects</Title>
					<ProjectsContainer>
						<Project />
						<Project />
						<Project />
						<Project />
						<Project />
						<Project />
					</ProjectsContainer>
				</Container>
				<Container></Container>
			</AppContainer>
		</>
	);
};

export default Home;
