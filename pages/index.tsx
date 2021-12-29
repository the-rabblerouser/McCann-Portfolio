import type { NextPage } from 'next';

import styled from 'styled-components';
// import Particles from 'react-tsparticles';

import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import AboutMe from '../components/AboutMe/About';
import Connect from '../components/Connect/Connect';

// import { particleOptions } from '../lib/utils/particleOptions';

const AppContainer = styled.div`
	position: absolute;
	top: 0;
	padding-top: 0 @media (min-width: 811px) {

	}
`;

const Home: NextPage = () => {
	return (
		<>
			{/* <Particles id='tsparticles' options={particleOptions} /> */}
			<AppContainer>
				<Navbar />
				<Hero />
				<AboutMe />
				<Connect background={'#9e5a63'} />
			</AppContainer>
		</>
	);
};

export default Home;
