import type { NextPage } from 'next';

import styled from 'styled-components';
import Particles from 'react-tsparticles';

// import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

import { particleOptions } from '../utils/particleOptions';

const AppContainer = styled.div`
	position: absolute;
	top: 0;
	padding-top: 0 @media (min-width: 811px) {

	}
`;

const AboutContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 50vh;
	width: 100vw;
	background: #c96567;

	@media (min-width: 811px) {
	}
`;

const Paragraph = styled.p`
	color: #fff;
	font-size: 1rem;
	text-align: center;
	width: 100%;
	margin: 1rem 0 0 0;

	@media (min-width: 811px) {
		font-size: 4rem;
	}
`;

const Home: NextPage = () => {
	return (
		<>
			<Particles id='tsparticles' options={particleOptions} />
			<AppContainer>
				{/* <Navbar /> */}
				<Hero />
				<AboutContainer>
					<Paragraph>
						I am a fullstack web devloper who focus is on the frontend.
					</Paragraph>
					<Paragraph>
						My preferred tools are React, Next.js, MongoDB and Node.js.
					</Paragraph>
					<Paragraph>
						I am currently living in NYC and looking for work.
					</Paragraph>
				</AboutContainer>
			</AppContainer>
		</>
	);
};

export default Home;
