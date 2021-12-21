import React from 'react';
import Link from 'next/link';

import {
	AboutContainer,
	AboutMe,
	ToolsContainerOne,
	ToolsContainerTwo,
	Tool,
	CheckOut,
	LinksContainer,
	MediaLink,
	WebDeveloper,
	ProjectsButton,
} from './aboutme.styled';

const About = () => {
	return (
		<>
			<AboutContainer>
				<AboutMe>My preffered tools are</AboutMe>
				<ToolsContainerOne>
					<Tool color='#61892f'>Typescript</Tool>
					<Tool color='#000000'>React.js</Tool>
					<Tool color='#61892f'>Next.js</Tool>
				</ToolsContainerOne>
				<ToolsContainerTwo>
					<Tool color='#86c232'>Node.js</Tool>
					<Tool color='#474B4F'>Express.js</Tool>
					<Tool color='#000000'>MongoDB</Tool>
				</ToolsContainerTwo>
				<CheckOut>Check me out on</CheckOut>
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
