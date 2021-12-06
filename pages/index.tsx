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
	height: 20vh;
	width: 100vw;
	margin-top: 4rem;

	@media (min-width: 811px) {
		height: 23vh;
		margin-top: 6rem;
	}
`;

const Connect = styled.p`
	color: #fff;
	font-size: 0.8rem;

	@media (min-width: 811px) {
		font-size: 1.2rem;
	}
`;

const Email = styled.a`
	color: #fff;
	font-size: 1rem;
	margin-top: 1rem;
	text-decoration: underline;

	@media (min-width: 811px) {
		font-size: 1rem;
	}
`;

const LinksContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	width: 18rem;
	text-align: center;
	margin-top: 3.5rem;

	@media (min-width: 811px) {
		margin-top: 5rem;
		width: 20rem;
	}
`;

const MediaLink = styled.a`
	color: #fff;
	font-size: 0.8rem;

	@media (min-width: 811px) {
		font-size: 1rem;
	}
`;

const Brand = styled.p`
	color: #fff;
	font-size: 0.7rem;

	@media (min-width: 811px) {
		font-size: 0.8rem;
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
				<Container>
					<Connect>Feel free to reach out if you're looking to connect</Connect>
					<Email href='mailto:tojmccann@gmail.com'>tojmccann@gmail.com</Email>
					<LinksContainer>
						<Brand>Joe McCann {new Date().getFullYear()}</Brand>
						<MediaLink href='https://github.com/the-rabblerouser'>
							Github
						</MediaLink>
						<MediaLink href='https://www.linkedin.com/in/joseph-mccann-77402a88/'>
							LinkedIn
						</MediaLink>
					</LinksContainer>
				</Container>
			</AppContainer>
		</>
	);
};

export default Home;
