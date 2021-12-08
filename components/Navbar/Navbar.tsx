import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { useSpring } from 'react-spring';

import {
	OuterContainer,
	InnerContainer,
	NavLinks,
	Diamond,
	DiamondText,
	Projects,
	Contact,
} from './navbar.styled';

const Navbar = () => {
	const router = useRouter();

	const [toggle, setToggle] = useState<boolean>(false);

	const styles = useSpring({ opacity: toggle ? 1 : 0 });

	const href = router.pathname === '/projects' ? '/' : '/projects';
	const link = router.pathname === '/projects' ? 'Home' : 'Projects';

	return (
		<>
			<OuterContainer>
				<InnerContainer
					onClick={() => setToggle(!toggle)}
					onMouseEnter={() => setToggle(true)}
					onMouseLeave={() => setToggle(false)}>
					<Diamond>
						<DiamondText>J</DiamondText>
					</Diamond>

					<NavLinks style={styles}>
						<Projects href={href}>{link}</Projects>
						<Contact href='mailto:tojmccann@gmail.com'>Contact</Contact>
					</NavLinks>
				</InnerContainer>
			</OuterContainer>
		</>
	);
};

export default Navbar;
