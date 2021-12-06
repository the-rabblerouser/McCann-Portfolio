import React from 'react';

import { OuterContainer, InnerContainer, Img } from './navbar.styled';

const index = () => {
	return (
		<>
			<OuterContainer>
				<InnerContainer>
					<Img src='images/IMG_1463.png' />
					<a href='mailto:tojmccann@gmail.com'>Contact</a>
				</InnerContainer>
			</OuterContainer>
		</>
	);
};

export default index;
