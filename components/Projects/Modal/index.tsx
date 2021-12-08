import React from 'react';

import { animated } from 'react-spring';

import {
	ModalContainer,
	ModalMain,
	Image,
	Title,
	Tools,
	ModalDescription,
	Hr,
	Link,
} from './modal.styled';

import { ModalProps } from './ModalPropTypes';

const index = ({
	styles,
	onClose,
	data: { image, description, title, repository, site, tools },
}: ModalProps) => {
	return (
		<animated.div style={styles} onClick={onClose}>
			<ModalContainer>
				<ModalMain>
					<Image src={image} />
					<Title>{title}</Title>
					<Tools>{tools}</Tools>

					<ModalDescription>{description}</ModalDescription>
					<Hr />
					<ModalDescription>
						Code: <Link href={repository}>{repository}</Link>
					</ModalDescription>
					<ModalDescription>
						Website: <Link href={site}>{site} </Link>
					</ModalDescription>
				</ModalMain>
			</ModalContainer>
		</animated.div>
	);
};

export default index;
