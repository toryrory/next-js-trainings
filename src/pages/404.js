//название файла 404 зарезервировано для ерор пейдж
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Heading from "@/components/Heading";
import styles from '@/styles/404.module.scss'
const ErrorPage = () => {
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
      <Heading>PAGE NOT FOUND</Heading>
      <Heading tag="h2">Something went wrong, try to reload page</Heading>
    </div>
  );
};
export default ErrorPage;
