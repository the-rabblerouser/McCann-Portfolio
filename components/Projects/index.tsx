import React from 'react';

import useSWR from 'swr';

import {
	Container,
	Title,
	ProjectsContainer,
	Project,
	ProjectMock,
} from '../Projects/projects.styled';

import { fetcher } from '../../lib/utils/fetcher';
import { ProjectTypes } from '../../lib/types/projectTypes';

const index = () => {
	const { data, error } = useSWR<ProjectTypes[]>(
		'/api/personalProjects',
		fetcher
	);

	if (error) return <div>failed to load</div>;
	if (!data) return <></>;

	return (
		<>
			<Container>
				<Title>Check out some of my personal projects</Title>
				<ProjectsContainer>
					{data.map(({ image }) => {
						return <Project image={image}></Project>;
					})}
					<ProjectMock />
					<ProjectMock />
					<ProjectMock />
				</ProjectsContainer>
			</Container>
		</>
	);
};

export default index;
