import React, { useState } from 'react';
import { useRouter } from 'next/router';

import {
	OuterContainer,
	NavLinks,
	Brand,
	Img,
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
				<NavLinks>
					<Brand>Joe McCann</Brand>
					<Img src='images/IMG_0082.png' />
					<Projects href={href}>{link}</Projects>
					<Contact href='mailto:tojmccann@gmail.com'>Contact</Contact>
				</NavLinks>
			</OuterContainer>
		</>
	);
};

export default Navbar;
