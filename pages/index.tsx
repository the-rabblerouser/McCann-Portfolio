import type { NextPage } from 'next';

import styled from 'styled-components';

const Home: NextPage = () => {
	const OuterContainer = styled.div`
		display: flex;
		justify-content: end;
		width: 100vw;

		@media (min-width: 500px) {
			justify-content: center;
		}
	`;
	const InnerContainer = styled.div`
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		height: 5rem;
		width: 75%;

		@media (min-width: 500px) {
			width: 20%;
		}
	`;

	const Img = styled.img`
		border: 1px solid #000;
		border-radius: 100%;
		height: 4rem;
		width: 4rem;
		margin: 5px;
	`;

	return (
		<>
			<OuterContainer>
				<InnerContainer>
					<Img src='images/IMG_1463.jpeg' />
					<a href='mailto:tojmccann@gmail.com'>Contact</a>
				</InnerContainer>
			</OuterContainer>
		</>
	);
};

export default Home;
