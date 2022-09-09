import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Footer from "../navs/footer";
import Header from '../navs/header';

export default function BasePage({ children }) {
  return (
    <div className={styles.container}>
        <Head>
            <title>AgendAI</title>
            <meta
                name="description"
                content="Applicativo para agendamentos online"
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Header />

        <main className={styles.main}>{children}</main>

        <Footer />
    </div>
  );
}
