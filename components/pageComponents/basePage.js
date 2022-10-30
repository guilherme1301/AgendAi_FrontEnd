import Head from "next/head";
import { useContext } from "react";
import { Context } from "../../pages/contexts/userContext";
import styles from "../../styles/Home.module.css";
import Footer from "../navs/footer";
import Header from "../navs/header";

export default function BasePage({ children }) {
  const { userData } = useContext(Context);

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>AgendAI</title>
          <meta
            name="description"
            content="Applicativo para agendamentos online"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header userData={userData}/>

        <main className={styles.main} style={{ minHeight: "56vh"}}>
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
}
