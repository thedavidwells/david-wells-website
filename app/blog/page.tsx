import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Writing",
  description: "Writing by David Wells.",
};

export default function Page() {
  return (
    <section>
      <h1 className="serif text-5xl leading-tight mb-4">
        My <em>writing</em>
      </h1>
      <p className="text-lg text-soft mb-10 max-w-lg">
        Notes on career changes, mindset, and building things.
      </p>
      <BlogPosts />
    </section>
  );
}
