import Head from "next/head";
import { GetStaticProps } from "next";
import Heading from "../../components/Heading";
import Link from "next/link";
import { FC } from "react";
import { postType } from "../../../types";

type postTypeProps = {
  posts: postType
}


const BASE_URL = "https://jsonplaceholder.typicode.com/";

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch(`${BASE_URL}posts`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            posts: data,
        }
    }
}
const Posts: FC <postTypeProps> = ({ posts }) => {
    return (
      <>
        <Head>
          <title>Posts</title>
        </Head>
        <Heading size={undefined}>Posts list: (SSG)</Heading>
        {posts &&
          posts.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
            </li>
          ))}
      </>
    );
};
export default Posts;
