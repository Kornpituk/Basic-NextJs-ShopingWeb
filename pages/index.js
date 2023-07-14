import { Inter } from "next/font/google";
import styles from "@/styles/about.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Head>
      <title>FisrtPage | GnaDorLA</title>
      <meta name="keywords" content="basic nextjs shoping"></meta>
    </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>HomePageFirst</h1>
        <Image src={"/p1.jpg"} width={1000} height={600} alt="logo"></Image>
        <p>Welcome To Basic NextJs</p>
        <Link href={"/products"} className={styles.btn}>All Products</Link>
      </div>
    </>
  );
}
