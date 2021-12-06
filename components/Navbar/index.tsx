import React from 'react';

import { OuterContainer, InnerContainer, Img, Contact } from './navbar.styled';

const index = () => {
	return (
		<>
			<OuterContainer>
				<InnerContainer>
					<Img src='images/IMG_1463.png' />
					<Contact href='mailto:tojmccann@gmail.com'>Contact</Contact>
				</InnerContainer>
			</OuterContainer>
		</>
	);
};

export default index;
