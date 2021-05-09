import Head from "next/head";
import { Footer } from "../components/footer";
import Header from "../components/header/header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Todo Application</title>
        <meta name="description" content="Todo Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Footer />
    </div>
  );
}
