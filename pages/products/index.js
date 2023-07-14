import Head from "next/head";
//https://dummyjson.com/products?limit=12
import Image from "next/image";
import styles from "@/styles/Product.module.css";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/products?limit=12");
  const data = await res.json();
  console.log(data);

  return {
    props: { products: data.products },
  };
}

export default function Index({ products }) {
  return (
    <>
      <Head>
        <title>ProductsPage | GnaDorLA</title>
        <meta name="keywords" content="basic nextjs shoping"></meta>
      </Head>
      <div className={styles.container}>
        {products.map((item) => (
          <div key={item.id}>
            <Link href={'/products/'+item.id}>
              <h2 className={styles.title}>
                {item.title} | {item.price} $
              </h2>
              <Image
                src={item.thumbnail}
                width={300}
                height={300}
                alt={item.title}
              ></Image>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
