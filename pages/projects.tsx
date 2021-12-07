import type { NextPage } from 'next';
import React from 'react';

import styled from 'styled-components';
import Particles from 'react-tsparticles';

import Projects from '../components/Projects';

import { particleOptions } from '../lib/utils/particleOptions';

const AppContainer = styled.div`
	position: absolute;
	top: 0;
	padding-top: 0 @media (min-width: 811px) {

	}
`;

const projects: NextPage = () => {
	return (
		<>
			<Particles id='tsparticles' options={particleOptions} />
			<AppContainer>
				<Projects />
			</AppContainer>
		</>
	);
};

export default projects;
