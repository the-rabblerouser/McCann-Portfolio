import React, { useState } from 'react';

import styled from 'styled-components';

import { useSpring, animated, config } from 'react-spring';

import {
	OuterContainer,
	InnerContainer,
	Projects,
	Contact,
} from './navbar.styled';

const NavLinks = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 70vw;
	height: 100%;
	margin-left: 10px;

	@media (min-width: 811px) {
		display: flex;
		justify-content: space-evenly;
		width: 50vw;
	}
`;

const Diamond = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	width: 30px;
	margin-right: 1rem;
	text-align: center;
	transform: rotate(45deg);
	background: #97aabd;
	box-shadow: 7px 4px #000;

	@media (min-width: 811px) {
	}
`;

const DiamondText = styled.p`
	transform: rotate(-45deg);
	color: #fff;
	fontsize: 1.5rem;

	@media (min-width: 811px) {
	}
`;

const index = () => {
	const [isVisible, set] = useState<boolean>(false);

	const props = useSpring({
		transform: isVisible ? 'translateX(0px)' : 'translateX(50px)',
		opacity: isVisible ? 1 : 0,
		config: config.gentle,
	});

	return (
		<>
			<OuterContainer>
				<InnerContainer>
					<animated.div style={props}>
						{isVisible ? (
							<NavLinks>
								<Projects href='/projects'>Projects</Projects>
								<Contact href='mailto:tojmccann@gmail.com'>Contact</Contact>
							</NavLinks>
						) : null}
					</animated.div>
				</InnerContainer>
				<Diamond onClick={() => set(!isVisible)}>
					<DiamondText style={{}}>J</DiamondText>
				</Diamond>
			</OuterContainer>
		</>
	);
};

export default index;
