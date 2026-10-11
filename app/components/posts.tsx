import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";
import { Window } from "./window";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <Window title="WRITING/">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="file-row file-row-link"
            href={`/blog/${post.slug}`}
          >
            <span>{post.metadata.title}</span>
            <span className="text-muted tabular-nums">
              {formatDate(post.metadata.publishedAt, false)}
            </span>
          </Link>
        ))}
    </Window>
  );
}
