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
		height: 80vh;
	}
`;

const Paragraph = styled.p`
	color: #fff;
	font-size: 1rem;
	text-align: center;
	width: 90%;
	margin: 1rem 0 0 0;

	@media (min-width: 811px) {
		font-size: 2rem;
		margin: 2rem 0 0 0;
	}
`;

const LinksContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	text-align: center;
	margin-top: 3.5rem;
	width: 22rem;

	@media (min-width: 811px) {
		margin-top: 7rem;
		width: 50%;
	}
`;

const MediaLink = styled.a`
	color: #fff;
	font-size: 0.8rem;

	@media (min-width: 811px) {
		font-size: 1.6rem;
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
					<LinksContainer>
						<MediaLink href='mailto:tojmccann@gmail.com'>Email</MediaLink>
						<MediaLink href='https://github.com/the-rabblerouser'>
							Github
						</MediaLink>
						<MediaLink href='https://www.linkedin.com/in/joseph-mccann-77402a88/'>
							LinkedIn
						</MediaLink>
					</LinksContainer>
				</AboutContainer>
			</AppContainer>
		</>
	);
};

export default Home;
