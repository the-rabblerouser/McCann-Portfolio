import React, { useState } from 'react';
import { useRouter } from 'next/router';

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

	const href = router.pathname === '/projects' ? '/' : '/projects';
	const link = router.pathname === '/projects' ? 'Home' : 'Projects';

	return (
		<>
			<OuterContainer>
				<InnerContainer
					onClick={() => setToggle(!toggle)}
					onMouseEnter={() => setToggle(true)}
					onMouseLeave={() => setToggle(false)}>
					<Diamond toggle={toggle}>
						<DiamondText toggle={toggle}>J</DiamondText>
					</Diamond>

					<NavLinks toggle={toggle}>
						<Projects href={href}>{link}</Projects>
						<Contact href='mailto:tojmccann@gmail.com'>Contact</Contact>
					</NavLinks>
				</InnerContainer>
			</OuterContainer>
		</>
	);
};

export default Navbar;
