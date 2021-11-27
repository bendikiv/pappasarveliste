import '../styles/global.css';
import { AppProps } from 'next/app';
import { Flex, ChakraProvider } from '@chakra-ui/react';

export const userName = 'Bendik';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Flex justifyContent="center">
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  );
}
export default App;
