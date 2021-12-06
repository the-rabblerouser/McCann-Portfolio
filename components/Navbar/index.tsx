import React from 'react';

import { OuterContainer, InnerContainer, Contact } from './navbar.styled';

const index = () => {
	return (
		<>
			<OuterContainer>
				<InnerContainer>
					<Contact href='mailto:tojmccann@gmail.com'>Contact</Contact>
				</InnerContainer>
			</OuterContainer>
		</>
	);
};

export default index;
