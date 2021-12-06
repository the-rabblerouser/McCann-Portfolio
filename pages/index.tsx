import type { NextPage } from 'next';

import styled from 'styled-components';
import Particles from 'react-tsparticles';

import Navbar from '../components/Navbar';
import { options } from '../utils/particleOptions';

const Home: NextPage = () => {
	const AppContainer = styled.div`
		position: absolute;
		top: 0;
		padding-top: 0 @media (min-width: 811px) {

		}
	`;
	const OuterContainer = styled.div`
		display: flex;
		justify-content: end;
		height: 95vh;

		@media (min-width: 811px) {
		}
	`;

	return (
		<>
			<Particles id='tsparticles' options={options} />
			<AppContainer>
				<OuterContainer>
					<Navbar />
				</OuterContainer>
			</AppContainer>
		</>
	);
};

export default Home;
