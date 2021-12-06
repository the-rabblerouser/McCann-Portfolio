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

export const ProjectsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 95vh;
	width: 100vw;

	@media (min-width: 811px) {
	}
`;

const Title = styled.p`
	color: #fff;
	font-size: 2rem;
	text-align: center;
	margin: 2rem 0 2rem 0;

	@media (min-width: 811px) {
		font-size: 4rem;
		margin: 4rem 0 4rem 0;
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
				<ProjectsContainer>
					<Title>Personal Projects</Title>
				</ProjectsContainer>
			</AppContainer>
		</>
	);
};

export default Home;
