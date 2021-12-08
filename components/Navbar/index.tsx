import React, { useState } from 'react';
import { useRouter } from 'next/router';

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
	margin: 5rem 3rem 0 0;
	text-align: center;
	transform: rotate(45deg);
	background: #97aabd;
	box-shadow: 7px 4px #000;
	cursor: pointer;

	@media (min-width: 811px) {
		height: 2.5rem;
		width: 2.5rem;
	}
`;

const DiamondText = styled.span`
	transform: rotate(-45deg);
	color: #fff;
	fontsize: 1.5rem;
	cursor: pointer;

	@media (min-width: 811px) {
	}
`;

const index = () => {
	const router = useRouter();

	const [isVisible, set] = useState<boolean>(false);

	const props = useSpring({
		transform: isVisible ? 'translateX(0px)' : 'translateX(90px)',
		opacity: isVisible ? 1 : 0,
		config: config.stiff,
	});

	const href = router.pathname === '/projects' ? '/' : '/projects';
	const link = router.pathname === '/projects' ? 'Home' : 'Projects';

	return (
		<>
			<OuterContainer>
				<InnerContainer>
					<animated.div style={props}>
						{isVisible ? (
							<NavLinks>
								<Projects href={href}>{link}</Projects>
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
