import type { NextPage } from 'next';

import styled from 'styled-components';
import Particles from 'react-tsparticles';

import Navbar from '../components/Navbar';
import { particleOptions } from '../utils/particleOptions';

const AppContainer = styled.div`
	position: absolute;
	top: 0;
	padding-top: 0 @media (min-width: 811px) {

	}
`;
const OuterContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 85vh;
	width: 100vw;
	// background: green;

	@media (min-width: 811px) {
	}
`;

const Img = styled.img`
	height: 6rem;
	width: 6rem;
	margin: 5px;

	@media (min-width: 811px) {
		height: 10rem;
		width: 10rem;
		margin: 1rem;
	}
`;

const Name = styled.p`
	color: #fff;
	font-size: 2rem;
	margin: 1rem 0 0 0;
	text-align: center;
	width: 100%;

	@media (min-width: 811px) {
		font-size: 4rem;
	}
`;

const About = styled.p`
	color: #fff;
	font-size: 1rem;
	margin: 1rem 0 0 0;
	text-align: center;
	width: 100%;

	@media (min-width: 811px) {
		font-size: 2rem;
	}
`;

const Home: NextPage = () => {
	return (
		<>
			<Particles id='tsparticles' options={particleOptions} />
			<AppContainer>
				{/* <Navbar /> */}
				<OuterContainer>
					<Img src='images/IMG_1463.png' />
					<Name>I'm Joe McCann</Name>
					<About>A Frontend Develoer based in New York City.</About>
				</OuterContainer>
			</AppContainer>
		</>
	);
};

export default Home;
