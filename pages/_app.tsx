import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colors: {
          gray: [
            '#F4F4F4',
            '#F2F2F2',
            '#EFEFEF',
            '#EDEDED',
            '#EBEBEB',
            '#E8E8E8',
            '#E6E6E6',
            '#E4E4E4',
            '#E1E1E1',
            '#DFDFDF',
          ],
        },
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
