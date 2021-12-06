import React from 'react';

import { OuterContainer, Img, Name, About } from './hero.styled';

const index = () => {
	return (
		<>
			<OuterContainer>
				<Img src='images/IMG_1463.png' />
				<Name>I'm Joe McCann</Name>
				<About>A Frontend Develoer based in New York City.</About>
			</OuterContainer>
		</>
	);
};

export default index;
