import { FC } from "react"; //Functional Component
import Heading from "./Heading";
import { contactType } from "../../types";

 type contactInfoProps = { //типизация пропсов компонента
contact: contactType
}

const ContactInfo: FC<contactInfoProps> = ({ contact }) => { // тут мы говорим что это функциональный компонент с таким то типом пропсов
// const ContactInfo = ({ contact }: contactInfoProps) => { так тоже можно, но это менее строгий вариант
  const { name, email, address } = contact || {};
  const { street, suite, city, zipcode } = address || {};
  
  if (!contact) {
    return <Heading size="h3">Contact is empty</Heading>;
  }

  return (
    <>
      <Heading size="h3">{name}</Heading>
      <p>
        <strong>Email: </strong> {email}
      </p>
      <p>
        <strong>Adress: </strong> {`${street}, ${suite}, ${city}, ${zipcode}`}
      </p>
    </>
  );
};
export default ContactInfo;
