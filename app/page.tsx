import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        David Wells - A Simple Blog
      </h1>
      <h2>
        About Me
      </h2>
      <p className="mb-4">
        {`I'm a B2B SaaS Sales Professional based in Boise, Idaho. 
        I have over 10 years of experience as a Software Engineer, working at companies such as FIS and Intuit.
        Additionally, I'm a real estate investor focused on Commercial and Self-Storage properies.
        My passion is solving problems through the use of innovative technology.`}
      </p>
      <h2>Blog Posts</h2>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
