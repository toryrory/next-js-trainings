//корневой элемент у вложеных маршрутов должен называться индекс.джс
import { FC } from "react";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { GetStaticProps } from "next";
import Heading from "../../components/Heading";
import { contactType } from "../../../types";

type contactsTypeProps = {
  contacts: [contactType] //каждый элемент массива будет с типом contactType
}

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

export const getStaticProps: GetStaticProps = async () => { // зарезевированная функция от Next.js, делает запрос на сервере и возвращает полностью готовую разметку
 
  const { data } = await axios.get("users");

  if (!data) { // если данных нет то создается такое условие, что возвращает зарезервированный некст.дж обьект который обратывает это возвращая 404 ошбику и страницу с ошибкой, работает с fetch
    return {
      notFound: true,
    }
  }
  return {
    props: {contacts: data}
  }
}

const Contacts: FC <contactsTypeProps> = ({contacts}) => {
  
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading size={undefined} >Contacts list: (SSR)</Heading>
      <ul>
        {contacts &&
          contacts.map(({ id, name }) => (
            <li key={id}>
              <Link href={`/contacts/${id}`}>{name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};
export default Contacts;


// const [contacts, setContacts] = useState(null); //так будет работать, но для поисковиков, СЕО это плохо, потому что запрос делается на клиенте

  // useEffect(() => {
  //   const fetchData = async () => {
  //    const resp = await axios.get('users')
  //     setContacts(resp.data);
  //   }
  //   fetchData()
  // }, [])