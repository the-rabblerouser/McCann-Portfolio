import React from 'react';

import {
	OuterContainer,
	InnerContainer,
	Projects,
	Contact,
} from './navbar.styled';

const index = () => {
	return (
		<>
			<OuterContainer>
				<InnerContainer>
					<Projects>Projects</Projects>
					<Contact href='mailto:tojmccann@gmail.com'>Contact</Contact>
				</InnerContainer>
			</OuterContainer>
		</>
	);
};

export default index;
