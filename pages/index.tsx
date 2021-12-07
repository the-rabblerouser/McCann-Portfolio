import type { NextPage } from 'next';
import Link from 'next/link';

import styled from 'styled-components';
import Particles from 'react-tsparticles';

// import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Connect from '../components/Connect';

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
	justify-content: center;
	height: 30vh;
	width: 100vw;

	@media (min-width: 811px) {
		height: 80vh;
	}
`;

export const Button = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	font-size: 0.8rem;
	background-color: #97aabd;
	border: none;
	height: 3rem;
	width: 8rem;
	box-shadow: 6px 5px #000;
	cursor: pointer;

	@media (min-width: 811px) {
		font-size: 1rem;
		height: 4rem;
		width: 12rem;
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
					<Link href='/projects'>
						<Button>View Projects</Button>
					</Link>
				</Container>
				<Connect background={'#9e5a63'} />
			</AppContainer>
		</>
	);
};

export default Home;
