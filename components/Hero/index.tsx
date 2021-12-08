import React from 'react';

import { OuterContainer, Img, Name, About } from './hero.styled';

const index = () => {
	return (
		<>
			<OuterContainer>
				<Img src='images/IMG_1463.png' />
				<Name>Hi, I'm Joe.</Name>
				<About>A Software Developer</About>
				<About>based in New York City.</About>
			</OuterContainer>
		</>
	);
};

export default index;
