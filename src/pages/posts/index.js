import Head from "next/head";
import Heading from "@/components/Heading";
import Link from "next/link";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

export const getStaticProps = async () => {
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
const Posts = ({ posts }) => {
    return (
      <>
        <Head>
          <title>Posts</title>
        </Head>
        <Heading>Posts list: (SSG)</Heading>
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
