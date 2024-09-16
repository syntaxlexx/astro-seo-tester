import type { Category, Post, User } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

interface Props {
  post: Post & { category?: Category | null; user: User | null };
}

const PostCard = ({ post }: Props) => {
  return (
    <article>
      <Card className="flex flex-col">
        <img
          src={post.featured_img}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription className="flex justify-between items-center gap-x-2">
            {post.category && (
              <span>
                <a href="#">{post.category.name}</a>
              </span>
            )}

            <span className="capitalize">
              <a href="#">{post.user?.name}</a>
            </span>

            <span>{post.published_at_human}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <div>{post.excerpt}</div>
        </CardContent>
        <CardFooter className="flex justify-end gap-x-3">
          <a href={`/posts/${post.slug}`}>
            <Button variant={"outline"}>Read More</Button>
          </a>
          {/* 
          <a href={route("posts.show.client-side", post.slug)}>
            <Button variant={"secondary"}>Client-Side</Button>
          </a> */}
        </CardFooter>
      </Card>
    </article>
  );
};

export default PostCard;
