import React from 'react';

import {
	Container,
	ConnectParagraph,
	Email,
	LinksContainer,
	Brand,
	MediaLink,
} from './connect.styled';

import { ConnectStyledProps } from './connectStyledProps';

const Connect = ({ background }: ConnectStyledProps) => {
	return (
		<>
			<Container background={background}>
				<ConnectParagraph>
					If you are looking for a developer or just trying to connect, feel
					free to reach out.
				</ConnectParagraph>
				<Email href='mailto:tojmccann@gmail.com'>tojmccann@gmail.com</Email>
				<LinksContainer>
					<Brand>Joe McCann</Brand>
					<MediaLink href='https://github.com/the-rabblerouser'>
						Github
					</MediaLink>
					<MediaLink href='https://www.linkedin.com/in/joseph-mccann-77402a88/'>
						LinkedIn
					</MediaLink>
				</LinksContainer>
			</Container>
		</>
	);
};

export default Connect;
