import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { useSpring, animated, config } from 'react-spring';

import {
	OuterContainer,
	InnerContainer,
	NavLinks,
	Diamond,
	DiamondText,
	Projects,
	Contact,
} from './navbar.styled';

const index = () => {
	const router = useRouter();

	const [isVisible, set] = useState<boolean>(false);

	const props = useSpring({
		transform: isVisible ? 'translateX(0px)' : 'translateX(50px)',
		opacity: isVisible ? 1 : 0,
		config: config.stiff,
	});

	const href = router.pathname === '/projects' ? '/' : '/projects';
	const link = router.pathname === '/projects' ? 'Home' : 'Projects';

	return (
		<>
			<OuterContainer>
				<InnerContainer>
					{isVisible ? (
						<animated.div style={props}>
							<NavLinks>
								<Projects href={href}>{link}</Projects>
								<Contact href='mailto:tojmccann@gmail.com'>Contact</Contact>
							</NavLinks>
						</animated.div>
					) : null}
				</InnerContainer>
				<Diamond onClick={() => set(!isVisible)}>
					<DiamondText style={{}}>J</DiamondText>
				</Diamond>
			</OuterContainer>
		</>
	);
};

export default index;
