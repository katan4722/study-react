import Head from "next/head";
import styles from "src/styles/Home.module.css";
import Main from "src/components/Main";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useCallback } from "react";

export default function Home() {
  const foo = 1;
  const handleclick = useCallback((e) => {
    console.log(e.target);
    e.preventDefault();
    alert(foo);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      　　
      <a href="/about" onClick={handleclick}>
        ボタン
      </a>
      <Main page="index" />
      <Footer />
    </div>
  );
}