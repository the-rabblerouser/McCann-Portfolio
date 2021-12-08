import React from 'react';
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

const index = () => {
	const router = useRouter();

	const href = router.pathname === '/projects' ? '/' : '/projects';
	const link = router.pathname === '/projects' ? 'Home' : 'Projects';

	return (
		<>
			<OuterContainer>
				<InnerContainer>
					<Diamond
						onMouseEnter={() => set(true)}
						onMouseLeave={() => set(false)}>
						<DiamondText style={{}}>J</DiamondText>
					</Diamond>
					<NavLinks>
						<Projects href={href}>{link}</Projects>
						<Contact href='mailto:tojmccann@gmail.com'>Contact</Contact>
					</NavLinks>
				</InnerContainer>
			</OuterContainer>
		</>
	);
};

export default index;
