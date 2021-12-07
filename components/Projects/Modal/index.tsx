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
						Code: <a href={repository}>{repository}</a>
					</ModalDescription>
					<ModalDescription>
						Website: <a href={site}>{site} </a>
					</ModalDescription>
				</ModalMain>
			</ModalContainer>
		</animated.div>
	);
};

export default index;
