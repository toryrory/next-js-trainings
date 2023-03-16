//корневой элемент у вложеных маршрутов должен называться индекс.джс
import Head from "next/head";
import Heading from "@/components/Heading";
import axios from "axios";
import Link from "next/link";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

export const getStaticProps = async () => { // зарезевированная функция от Next.js, делает запрос на сервере и возвращает полностью готовую разметку
 
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

const Contacts = ({contacts}) => {
  
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading>Contacts list: (SSR)</Heading>
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