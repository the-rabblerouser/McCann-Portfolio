import type { NextPage } from 'next';

import styled from 'styled-components';
import Particles from 'react-tsparticles';

import Navbar from '../components/Navbar';
import { particleOptions } from '../utils/particleOptions';

const Home: NextPage = () => {
	const AppContainer = styled.div`
		position: absolute;
		top: 0;
		padding-top: 0 @media (min-width: 811px) {

		}
	`;
	const OuterContainer = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 95vh;

		@media (min-width: 811px) {
		}
	`;

	//  const Img = styled.img`
	// height: 4rem;
	// width: 4rem;
	// margin: 5px;
	// `;

	return (
		<>
			<Particles id='tsparticles' options={particleOptions} />
			<AppContainer>
				<Navbar />
				<OuterContainer>
					{/* <Img src='images/IMG_1463.png' /> */}
				</OuterContainer>
			</AppContainer>
		</>
	);
};

export default Home;
