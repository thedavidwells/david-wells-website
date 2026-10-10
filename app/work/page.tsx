import Image from "next/image";

export const metadata = {
  title: "Work",
  description: "Work",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">work</h1>
      <br></br>
      <h2 className="font-medium mt-8 mb-3">Vercel</h2>
      <small className="flex text-sm -mt-3 mb-3">2024</small>
      <small className="flex text-sm text-gray-500 -mt-3 mb-3">
        Enterprise Sales Development Representative (2024)
      </small>
      <p className="leading-snug">
        I joined Vercel to continue with my passion in the software development space,
        after working for top tech companies as a software engineer for over 10
        years.
      </p>
    </section>
  );
}
