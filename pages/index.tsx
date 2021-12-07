import type { NextPage } from 'next';
import Link from 'next/link';

import styled from 'styled-components';
import Particles from 'react-tsparticles';

// import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Connect from '../components/Connect';

import {
	ProjectsButtonContainer,
	ProjectsButton,
} from '../components/Projects/projects.styled';

import { particleOptions } from '../lib/utils/particleOptions';

const AppContainer = styled.div`
	position: absolute;
	top: 0;
	padding-top: 0 @media (min-width: 811px) {

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
				<ProjectsButtonContainer>
					<Link href='/projects'>
						<ProjectsButton>View Projects</ProjectsButton>
					</Link>
				</ProjectsButtonContainer>
				<Connect background={'#9e5a63'} />
			</AppContainer>
		</>
	);
};

export default Home;
