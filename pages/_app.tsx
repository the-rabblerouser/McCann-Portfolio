import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Nunito Sans', sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

`;

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
