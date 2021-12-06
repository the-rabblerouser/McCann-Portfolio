import React from 'react';

import {
	AboutContainer,
	Paragraph,
	LinksContainer,
	MediaLink,
} from '../AboutMe/aboutme.styled';

const index = () => {
	return (
		<>
			<AboutContainer>
				<Paragraph>
					I am a fullstack web devloper who focus is on the frontend.
				</Paragraph>
				<Paragraph>
					My preferred tools are React, Next.js, MongoDB and Node.js.
				</Paragraph>
				<Paragraph>
					I am currently living in NYC and looking for work.
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

export default index;
