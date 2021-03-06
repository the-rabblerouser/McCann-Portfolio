import React, { useState } from 'react';

import { useTransition } from 'react-spring';

import {
	Body,
	Container,
	Title,
	ProjectsContainer,
	Project,
} from './projects.styled';

import Modal from './Modal/Modal';

import { ProjectTypes } from './types/projectTypes';

const Projects = ({ data }: { data: ProjectTypes[] }) => {
	const [showModal, setshowModal] = useState<boolean>(false);
	const [projectData, setprojectData] = useState<{}>({});

	const transitions = useTransition(showModal, {
		from: { opacity: 0 },
		enter: {
			opacity: 1,
			height: '100vh',
			width: '100vw',
			zindex: '1',
			position: 'fixed',
			top: '0',
			background: 'rgba(0,0,0,0.4)',
		},
		leave: { opacity: 0 },
	});

	return (
		<Body showModal={showModal}>
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
		</Body>
	);
};

export default Projects;
