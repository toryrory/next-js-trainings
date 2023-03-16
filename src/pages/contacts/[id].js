//название файла это то что будет отображаться в URL, что бы роут был динамический нужно обернуть его имя в квадратные скобки
// SSR approach with axios on this page
import Head from "next/head";
import ContactInfo from "@/components/ContactInfo";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
export const getServerSideProps = async (context) => {// зарезевированная функция от Next.js, используется для асинхронных запросов на сервер при SSR подходе, принимает обьект context
  const { id } = context.params;
    const { data } = await axios.get(`users/${id}`);
    if (!data) {
     
      return {
        notFound: true,
      };
    }
    return {
      props: { contact: data },
    };
  };

const Contact = ({contact}) => {

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={contact}/>
    </>
  );
};
export default Contact;
