import React from 'react';

import {
	Container,
	Connect,
	Email,
	LinksContainer,
	Brand,
	MediaLink,
} from '../Connect/connect.styled';

import { ConnectStyledProps } from './connectStyledProps';

const index = ({ background }: ConnectStyledProps) => {
	return (
		<>
			<Container background={background}>
				<Connect>Feel free to reach out if you're looking to connect</Connect>
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

export default index;
