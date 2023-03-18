// SSG approach with fetch on this page, сгенерит статичные страницы для каждой новости, нужно определить сколько страниц будет
import { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";
import Head from "next/head";
import PostInfo from "../../components/PostInfo";
import { postType } from "../../../types";

type postTypeProps = {
  post: postType
}
const BASE_URL = "https://jsonplaceholder.typicode.com/";

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${BASE_URL}posts`);
  const data = await response.json();

    const paths = data.map(({ id }) => ({
       params: {id: id.toString()}, //каждый элемент массива это обьект со свойством парамс, в котором обьект с айди, который должен быть строкой
    })) //формируем массив путей
    
    return { //из функции возвращается спец обьект
        paths,
        fallback: false, //в случае возникновнения ошибки вернется 404 ошибка
    }
};
export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params;
  const response = await fetch(`${BASE_URL}posts/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: data,
    },
  };
};
const Post: FC <postTypeProps>= ({post}) => {
  return (
    <>
      <Head>Post</Head>
      <PostInfo post={ post} />
    </>
  );
};
export default Post;
