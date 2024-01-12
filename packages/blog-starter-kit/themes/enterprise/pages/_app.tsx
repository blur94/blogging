import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import { AppProps } from 'next/app';
import '../styles/index.css';

const theme = createTheme({
	/** Put your mantine theme override here */
});

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MantineProvider theme={theme}>
			<Component {...pageProps} />
		</MantineProvider>
	);
}
