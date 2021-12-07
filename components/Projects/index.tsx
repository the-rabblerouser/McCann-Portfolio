import React, { useState } from 'react';

import useSWR from 'swr';
import { useTransition, animated } from 'react-spring';

import {
	Container,
	Title,
	ProjectsContainer,
	Project,
} from '../Projects/projects.styled';

import Modal from './Modal';

import { fetcher } from '../../lib/utils/fetcher';
import { ProjectTypes } from '../../lib/types/projectTypes';

const index = () => {
	const [showModal, setshowModal] = useState<boolean>(false);
	const [projectData, setprojectData] = useState<{}>({});

	const transitions = useTransition(showModal, {
		from: { opacity: 0 },
		enter: {
			opacity: 1,
			height: '100%',
			width: '100%',
			zindex: '1',
			position: 'absolute',
			top: '0',
			background: 'rgba(0,0,0,0.4)',
			overflow: 'none',
		},
		leave: { opacity: 0 },
	});

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
					{data.map((item) => {
						return (
							<div key={item.title}>
								<Project
									image={item.image}
									onClick={() => {
										setprojectData(item);
										setshowModal(true);
									}}
								/>
							</div>
						);
					})}
					{transitions(
						(styles, item) =>
							item && (
								<Modal
									styles={styles}
									data={projectData}
									onClose={() => setshowModal(false)}
								/>
							)
					)}
				</ProjectsContainer>
			</Container>
		</>
	);
};

export default index;
