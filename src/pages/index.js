import Head from "next/head";
import Image from "next/image";
import bgNextJsImg from "public/next_js_basic-1024x585.png";
import Heading from "@/components/Heading";
import styles from "@/styles/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading>Next.js App</Heading>
      <Image
        src={bgNextJsImg}
        width={200}
        height={100}
        alt="Background Next.js image"
        placeholder="blur"
      />
    </div>
  );
};
export default Home;
