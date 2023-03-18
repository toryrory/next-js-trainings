import { socialsType } from "../../types";
import styles from "../styles/Socials.module.scss";
import { FC, ReactNode } from "react";

type socialsProps = {
  socials: socialsType
}

const Socials: FC<socialsProps> = ({ socials }) => {
  if (!socials) return null;

  return (
    
      <ul className={styles.socials}>
        {socials.map(({ id, icon, path }) => (
          <li key={id}>
            <a href={path} target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-${icon}`} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
  );
};
export default Socials;
