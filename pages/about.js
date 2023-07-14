import styles from "@/styles/about.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function About() {
  return (
    <>
    <Head>
      <title>AboutPage | GnaDorLA</title>
      <meta name="keywords" content="basic nextjs shoping"></meta>
    </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>About Us</h1>
        <Image src={"/about.svg"} width={400} height={400} alt="logo"></Image>
      </div>
    </>
  );
}
