import Head from "next/head";
import Image from "next/image";
// import bgNextJsImg from "public/next_js_basic-1024x585.png";
import Heading from "../components/Heading";
import Socials from "../components/Socials";
import styles from "../styles/Home.module.scss";
import { FC } from "react";
import { socialsType } from "../../types";

type socialsTypeProps = {
  socials: socialsType,
}

export const getStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { socials: data },
  };
  } catch {
     return {
    props: { socials: null },
  };
  }
};

const Home: FC <socialsTypeProps> = ({ socials }) => {
  
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading size={undefined}>Next.js App</Heading>
      <Heading size="h3">Contact me:</Heading>
      <Socials socials={socials} />
      {/* <Image
        src={bgNextJsImg}
        width={120}
        height={70}
        alt="Background Next.js image"
        placeholder="blur"
      /> */}
      
    </div>
  );
};
export default Home;
