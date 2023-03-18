
const Heading = ({ size, children }) => {
    const Tag = size || 'h1';
    return <Tag>{children}</Tag>;
}
export default Heading;