import { FC } from "react";
import Heading from "./Heading";
import { postType } from "../../types";

type postInfoProps = {
post: postType,
}
const PostInfo: FC<postInfoProps> = ({ post }) => {
    const { title, body } = post || {};
    if (!post) {
        return <Heading size="h3">Post is empty</Heading>
    }
    return ( 
        <>
            <Heading size="h3">{title}</Heading>
            <p>{body}</p>
        </>
    )
    
}
export default PostInfo;