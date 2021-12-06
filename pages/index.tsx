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

const Home: NextPage = () => {
	return (
		<>
			<Particles id='tsparticles' options={particleOptions} />
			<AppContainer>
				{/* <Navbar /> */}
				<OuterContainer>
					<Hero />
				</OuterContainer>
			</AppContainer>
		</>
	);
};

export default Home;
