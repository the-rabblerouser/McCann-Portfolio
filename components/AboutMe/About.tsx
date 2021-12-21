import React from 'react';
import Link from 'next/link';

import {
	AboutContainer,
	AboutMe,
	ToolsContainer,
	Tool,
	LinksContainer,
	MediaLink,
	WebDeveloper,
	ProjectsButton,
} from './aboutme.styled';

const About = () => {
	return (
		<>
			<AboutContainer>
				<AboutMe color='#474B4f' margin='7px 0 0 0'>
					My preffered tools are
				</AboutMe>
				<ToolsContainer margin='0 0 0 1rem'>
					<Tool color='#61892f'>Typescript</Tool>
					<Tool color='#000000'>React.js</Tool>
					<Tool color='#61892f'>Next.js</Tool>
				</ToolsContainer>
				<ToolsContainer margin='0 0 0 3rem'>
					<Tool color='#86c232'>Node.js</Tool>
					<Tool color='#474B4F'>Express.js</Tool>
					<Tool color='#000000'>MongoDB</Tool>
				</ToolsContainer>
				<AboutMe color='#6b6e70' margin='0'>
					Check me out on
				</AboutMe>
				<LinksContainer>
					<MediaLink href='https://github.com/the-rabblerouser'>
						Github
					</MediaLink>
					<MediaLink href='https://www.linkedin.com/in/joseph-mccann-77402a88/'>
						LinkedIn
					</MediaLink>
				</LinksContainer>
				<WebDeveloper>FullStack Web Devloper Frontend Focus</WebDeveloper>
				<Link href='/projects' passHref>
					<ProjectsButton>Personal Projects</ProjectsButton>
				</Link>
			</AboutContainer>
		</>
	);
};

export default About;
