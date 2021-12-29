import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import useSWR from 'swr';

import styled from 'styled-components';
// import Particles from 'react-tsparticles';
import { fetcher } from '../lib/utils/fetcher';
import { ProjectTypes } from '../components/Projects/types/projectTypes';

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
	const { data, error } = useSWR<ProjectTypes[]>(
		'/api/personalProjects',
		fetcher
	);

	if (error) return <div>failed to load</div>;
	if (!data) return <></>;
	return (
		<>
			<Head>
				<link
					rel='preload'
					href='/api/personalProjects'
					as='fetch'
					crossOrigin='anonymous'
				/>
			</Head>
			{/* <Particles id='tsparticles' options={particleOptions} /> */}
			<AppContainer>
				<Navbar />
				<Projects data={data} />
				<Connect background={'none'} />
			</AppContainer>
		</>
	);
};

export default projects;
