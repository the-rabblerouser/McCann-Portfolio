import React from 'react';

import {
	OuterContainer,
	Name,
	WebDev,
	NYC,
	IconContainer,
	Icon,
	Img,
	ArrowContainer,
} from './hero.styled';
import { Github, LinkedIn, DownArrow } from '../../lib/icons';

const Hero = () => {
	return (
		<>
			<OuterContainer>
				<WebDev>A Web Developer</WebDev>
				<Name>Hi, I&apos;m Joe</Name>
				<NYC>based in New York City.</NYC>
				<IconContainer>
					<Icon href='https://github.com/the-rabblerouser'>
						<Github />
					</Icon>
					<Icon href='https://www.linkedin.com/in/joseph-mccann-77402a88/'>
						<LinkedIn />
					</Icon>
				</IconContainer>
				<Img src='images/IMG_1534.jpeg' />
				<ArrowContainer>
					<DownArrow />
				</ArrowContainer>
			</OuterContainer>
		</>
	);
};

export default Hero;
