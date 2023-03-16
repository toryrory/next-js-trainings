import Heading from "./Heading";

const PostInfo = ({ post }) => {
    const { title, body } = post || {};
    if (!post) {
        return <Heading tag="h3">Post is empty</Heading>
    }
    return ( 
        <>
            <Heading tag="h3">{title}</Heading>
            <p>{body}</p>
        </>
    )
    
}
export default PostInfo;