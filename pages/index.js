import Head from 'next/head';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Form } from '../components/form';
import { List } from '../components/list';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Todo Application</title>
				<meta name='description' content='Todo Application' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<Form />
			<List />
			<Footer />
		</div>
	);
}
