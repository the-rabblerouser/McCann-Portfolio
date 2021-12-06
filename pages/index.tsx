import type { NextPage } from 'next';

import styled from 'styled-components';

import Navbar from '../components/Navbar';

const Home: NextPage = () => {
	const OuterContainer = styled.div`
		display: flex;
		justify-content: end;
		height: 95vh;

		@media (min-width: 811px) {
		}
	`;

	return (
		<>
			<OuterContainer>
				<Navbar />
			</OuterContainer>
		</>
	);
};

export default Home;
