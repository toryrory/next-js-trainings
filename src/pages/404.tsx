//название файла 404 зарезервировано для ерор пейдж
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Heading from "../components/Heading";
import styles from '../styles/404.module.scss'
import { FC } from "react";

const ErrorPage:FC = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 3000);
  }, [router]);
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Error</title>
      </Head>
      <Heading size={undefined}>PAGE NOT FOUND</Heading>
      <Heading size="h2">Something went wrong, try to reload page</Heading>
    </div>
  );
};
export default ErrorPage;
