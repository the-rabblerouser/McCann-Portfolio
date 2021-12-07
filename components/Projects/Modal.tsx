import React from 'react';

import styled from 'styled-components';
import { animated } from 'react-spring';

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

interface ModalProps {
	styles: object;
	onClose: () => void;
	data: {
		_id?: string;
		description?: string;
		image?: string;
		repository?: string;
		site?: string;
		title?: string;
		tools?: string;
	};
}

const Modal = ({ styles, onClose, data }: ModalProps) => {
	return (
		<animated.div style={styles} onClick={onClose}>
			<ModalContainer>
				<ModalMain>
					<Image src={data.image} />
				</ModalMain>
			</ModalContainer>
		</animated.div>
	);
};

export default Modal;
