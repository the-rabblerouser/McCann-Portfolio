import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';

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

const theme = {
	primary: '#c96567',
	secondary: '#97aabd',
	teriary: '#314455',
	white: '#fff',
};

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>joemccann.tech</title>
			</Head>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
