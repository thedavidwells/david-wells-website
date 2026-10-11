import { RetroButton, Window } from "app/components/window";
import { jobs } from "app/components/links";

export const metadata = {
  title: "Work",
  description: "David Wells' work history: software engineering and sales.",
};

export default function Page() {
  return (
    <section>
      <h1 className="serif text-5xl leading-tight mb-4">
        Work <em>history</em>
      </h1>
      <p className="text-lg text-soft mb-10 max-w-lg">
        Ten years as a software engineer, then a move into enterprise sales.
      </p>

      <div className="flex flex-col gap-8">
        {jobs.map((job) => (
          <Window key={job.company} title={`${job.company.toUpperCase()}.EXE`}>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
              <h2 className="serif text-2xl">{job.company}</h2>
              {job.years && <span className="mono-label text-muted">{job.years}</span>}
            </div>
            <p className="mono-label text-muted mb-3">{job.role}</p>
            <p className="leading-relaxed">{job.summary}</p>
          </Window>
        ))}

        <Window title="SIDE_PROJECTS.TXT">
          <h2 className="serif text-2xl mb-2">Real estate investing</h2>
          <p className="leading-relaxed">
            Commercial and self-storage properties, with some short-term
            rentals on the side.
          </p>
        </Window>
      </div>

      <div className="flex flex-wrap gap-4 mt-12">
        <RetroButton href="https://www.linkedin.com/in/thedavidwells/" accent>
          Connect on LinkedIn
        </RetroButton>
      </div>
    </section>
  );
}
