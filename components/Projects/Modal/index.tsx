import React from 'react';

import styled from 'styled-components';
import { animated } from 'react-spring';
import { ModalProps } from './ModalPropTypes';

const ModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
`;

const ModalMain = styled.div`
	height: 350px;
	width: 350px;
	display: flex;
	flex-direction: column;
	justify-content: bottom;
	align-items: center;
	background-color: #fff;
	border: 1px solid black;
`;

const Image = styled.img`
	height: 150px;
	width: 100%;
`;

const Title = styled.p`
	text-align: left;
	width: 100%;
	margin-left: 1rem;
`;

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
				</ModalMain>
			</ModalContainer>
		</animated.div>
	);
};

export default index;
