import React from 'react';

import {
	AboutContainer,
	Paragraph,
	LinksContainer,
	MediaLink,
} from './aboutme.styled';

const About = () => {
	return (
		<>
			<AboutContainer>
				<Paragraph>
					I am a fullstack Web Devloper with a focus frontend development.
				</Paragraph>
				<Paragraph>
					My preferred tools are Typescript, React.js, Next.js, Node.js, and
					MongoDB.
				</Paragraph>
				<Paragraph>
					I am currently living in NYC and looking to join a new team.
				</Paragraph>
				<LinksContainer>
					<MediaLink href='mailto:tojmccann@gmail.com'>Email</MediaLink>
					<MediaLink href='https://github.com/the-rabblerouser'>
						Github
					</MediaLink>
					<MediaLink href='https://www.linkedin.com/in/joseph-mccann-77402a88/'>
						LinkedIn
					</MediaLink>
				</LinksContainer>
			</AboutContainer>
		</>
	);
};

export default About;
