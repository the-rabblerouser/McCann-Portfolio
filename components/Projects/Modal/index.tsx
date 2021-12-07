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
	height: 370px;
	width: 370px;
	display: flex;
	flex-direction: column;
	justify-content: bottom;
	align-items: center;
	background-color: #9e5a63;
	border: 1px solid black;
`;

const Image = styled.img`
	height: 180px;
	width: 100%;
`;

const Title = styled.p`
	color: #fff;
	font-size: 1.5rem;
	text-align: left;
	width: 100%;
	margin: 0.3rem 0 0 1rem;
`;

const Tools = styled.p`
	color: #fff;
	font-size: 0.8rem;
	text-align: left;
	width: 100%;
	margin: 0 0 0 1rem;
`;

const Hr = styled.hr`
	width: 350px;
	color: #fff;
	margin: 0.8rem 0 0 0;
`;

const Description = styled.p`
	color: #fff;
	font-size: 0.8rem;
	text-align: left;
	width: 100%;
	margin: 1rem 0 0 1rem;
`;

const Code = styled.p`
	color: #fff;
	font-size: 0.8rem;
	text-align: left;
	width: 100%;
	margin: 1rem 0 0 1rem;
`;

const Site = styled.p`
	color: #fff;
	font-size: 0.8rem;
	text-align: left;
	width: 100%;
	margin: 1rem 0 0 1rem;
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
					<Tools>{tools}</Tools>

					<Description>{description}</Description>
					<Hr />
					<Code>
						Code: <a href={repository}>{repository}</a>
					</Code>
					<Site>
						Website: <a href={site}>{site} </a>
					</Site>
				</ModalMain>
			</ModalContainer>
		</animated.div>
	);
};

export default index;
