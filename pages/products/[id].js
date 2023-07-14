import Head from "next/head";
import Image from "next/image";
import Styles from "@/styles/detail.module.css";

export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/products?limit=12");
  const data = await res.json();
  const paths = data.products.map((item) => {
    return {
      params: { id: String(item.id) },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const res = await fetch("https://dummyjson.com/products/" + id);
  const data = await res.json();
  console.log(data);

  return {
    props: { products: data },
  };
}

export default function ProductDetail({ products }) {
  return (
    <>
      <Head>
        <title>{products.title}</title>
      </Head>
      <div className={Styles.container}>
        <div>
          <Image
            src={products.thumbnail}
            width={300}
            height={300}
            alt={products.tilte}
          ></Image>
        </div>
        <div className={Styles.detail}>
          <h1>Name : {products.title}</h1>
          <h2>Price : {products.price}</h2>
          <h2>Category : {products.category}</h2>
          <h3>Brand : {products.brand}</h3>
          <h4>Description : {products.description}</h4>
          <h4>Rating : {products.rating}</h4>
        </div>
      </div>
    </>
  );
}
