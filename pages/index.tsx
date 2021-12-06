import type { NextPage } from 'next';

import styled from 'styled-components';
import Particles from 'react-tsparticles';

// import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';

import { particleOptions } from '../lib/utils/particleOptions';

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
	height: 50vh;
	width: 100vw;

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
				<Projects />
				<Container></Container>
			</AppContainer>
		</>
	);
};

export default Home;
