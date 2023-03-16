import Link from "next/link";
import { useRouter } from "next/router"; //под дефолту активная ссылка не подсвечивается, с помощью этого хука в Next.js это делается кастомно
import styles from "@/styles/NavBar.module.scss";
import Image from "next/image";


const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Posts", path: "/posts" },
  { id: 3, title: "Contacts", path: "/contacts" }
];
const NavBar = () => {
    const { pathname } = useRouter(); //определяет текущую страницу
    
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/next-js-logo.png" width={50} height={50} alt="Logo" />
      </div>
      <ul className={styles.nav}>
        {navigation.map(({ id, title, path }) => (
          <li key={id} className={styles.links}>
            <Link
              href={path}
              className={pathname === path ? styles.active : null}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavBar;
