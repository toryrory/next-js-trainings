import Heading from "./Heading";

const ContactInfo = ({ contact }) => {
  const { name, email, address } = contact || {};
  const { street, suite, city, zipcode } = address || {};
  
  if (!contact) {
    return <Heading tag="h3">Contact is empty</Heading>;
  }

  return (
    <>
      <Heading tag="h3">{name}</Heading>
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
