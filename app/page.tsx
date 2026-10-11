import Image from "next/image";
import Link from "next/link";
import { RetroButton, Window } from "app/components/window";
import { jobs, socialLinks } from "app/components/links";
import { formatDate, getBlogPosts } from "app/blog/utils";

export default function Page() {
  const posts = getBlogPosts().sort((a, b) =>
    a.metadata.publishedAt > b.metadata.publishedAt ? -1 : 1
  );

  return (
    <section>
      <div className="hero-grid">
        <div>
          <h1 className="serif text-5xl md:text-6xl leading-[1.02] mb-6">
            From writing code to <em>selling</em> it
          </h1>
          <p className="text-lg leading-relaxed mb-8 text-soft max-w-md">
            I'm David, a 10-year software engineer turned sales professional.
            I spent a decade building products at companies like Intuit and
            FIS, and most recently helped developer teams ship faster at
            Vercel.
          </p>
          <div className="flex flex-wrap gap-4">
            <RetroButton href="/work" accent>
              View my work
            </RetroButton>
            <RetroButton href="/blog/mindset-over-matter">
              Read my story
            </RetroButton>
          </div>

          <Window title="NOW.TXT" className="mt-12" bodyClassName="mono-body">
            <p>&gt; status: open to new roles</p>
            <p>&gt; background: engineering + enterprise sales</p>
            <p>&gt; investing: commercial and self-storage real estate</p>
            <p>
              &gt; passions: helping people, solving problems
              <span className="cursor" aria-hidden="true">
                _
              </span>
            </p>
          </Window>
        </div>

        <div className="window-stack">
          <Window title="ME.JPG" className="photo-window">
            <div className="photo">
              <Image
                src="/images/david.png"
                alt="Headshot of David Wells"
                width={600}
                height={600}
                priority
              />
            </div>
          </Window>

          <Window title="WORK.EXE" className="offset-window">
            {jobs.map((job) => (
              <div key={job.company} className="file-row">
                <span>{job.company}</span>
                <span className="text-muted">{job.years || job.role}</span>
              </div>
            ))}
            <Link href="/work" className="mono-label mt-3 inline-block">
              ▸ full history
            </Link>
          </Window>

          <Window title="LINKS.DIR">
            <ul className="grid grid-cols-2 gap-2 mono-body">
              {socialLinks.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-4"
                  >
                    ▸ {name}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/blog" className="hover:underline underline-offset-4">
                  ▸ Writing
                </Link>
              </li>
            </ul>
          </Window>
        </div>
      </div>

      <Window title="WRITING/" className="mt-16">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="file-row file-row-link"
          >
            <span>{post.slug}.mdx</span>
            <span className="text-muted tabular-nums">
              {formatDate(post.metadata.publishedAt, false)}
            </span>
          </Link>
        ))}
      </Window>
    </section>
  );
}
