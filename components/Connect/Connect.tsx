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
				<ConnectParagraph>Lets Build Something Together</ConnectParagraph>
				<Email href='mailto:tojmccann@gmail.com'>tojmccann@gmail.com</Email>
				<LinksContainer>
					<Brand>Joe McCann {new Date().getFullYear()}</Brand>
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
