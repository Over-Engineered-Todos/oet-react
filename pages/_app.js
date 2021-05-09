import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { TodosContextProvider } from '../hooks/use-todos';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<TodosContextProvider>
				<Component {...pageProps} />
			</TodosContextProvider>
		</ChakraProvider>
	);
}

export default MyApp;
