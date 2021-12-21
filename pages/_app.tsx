import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Nunito Sans', sans-serif;
  background: #222629;
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
	lightGreen: '#86c232',
	darkGreen: '#61892f',
	lightGrey: '#6b6e70',
	darkGrey: '#474B4F',
};

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>joemccann.tech</title>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='favicon_io/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='favicon_io/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='favicon_io/favicon-16x16.png'
				/>
				<link rel='manifest' href='/favicon_io/site.webmanifest' />
			</Head>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
