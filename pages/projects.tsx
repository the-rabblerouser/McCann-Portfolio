import type { NextPage } from 'next';
import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';
// import Particles from 'react-tsparticles';

import Navbar from '../components/Navbar/Navbar';
import Projects from '../components/Projects/Projects';
import Connect from '../components/Connect/Connect';

// import { particleOptions } from '../lib/utils/particleOptions';

const AppContainer = styled.div`
	position: absolute;
	top: 0;
	padding-top: 0 @media (min-width: 811px) {

	}
`;

const projects: NextPage = () => {
	return (
		<>
			{/* <Particles id='tsparticles' options={particleOptions} /> */}
			<AppContainer>
				<Navbar />
				<Projects />
				<Connect background={'none'} />
			</AppContainer>
		</>
	);
};

export default projects;
