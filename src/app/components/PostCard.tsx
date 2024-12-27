import { Card, CardContent, Typography } from "@mui/material";

interface PostProps {
  post: Post;
}

const PostCard = ({ post }: PostProps) => {
  return (
    <Card sx={{ minWidth: 275, width: 500 }} key={post.id}>
      <CardContent>
        <Typography variant="h5" component="div">
          {`${post.id} ${post.title}`}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          {`user id: ${post.userId} post id: ${post.id}`}
        </Typography>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {post.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
