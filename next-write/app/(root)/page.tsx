// app/page.tsx veya app/home/page.tsx (Next.js 13+ App Router)

import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupCardType } from "@/components/StartupCard";

const getPosts = async (): Promise<StartupCardType[]> => {
  // Burada gerçek API endpoint'ini koymalısın, örn:
  // 'http://localhost:3000/api/posts' veya başka bir URL
  const res = await fetch("http://localhost:3000/api/auth/nextauth", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Posts alınırken hata oluştu.");

  return res.json();
};

export default async function Home({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const query = searchParams.query || "";

  let posts = await getPosts();

  // Basit arama filtresi (title veya description içinde query geçiyorsa)
  if (query) {
    const qLower = query.toLowerCase();
    posts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(qLower) ||
        post.description.toLowerCase().includes(qLower)
    );
  }

  return (
    <>
      <section
        style={{
          backgroundImage:
            "linear-gradient(to right, transparent 49.5%, rgba(220, 67, 251, 0.632) 49.5%, rgba(251, 67, 223, 0.6) 50.5%, transparent 50.5%)",
          backgroundSize: "5% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "repeat-x",
        }}
        className="w-full bg-primary min-h-[530px] flex justify-center items-center flex-col py-10 px-6"
      >
        <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl text-white">
          Submit Ideas, Vote on Pitcher, and Get Noticed in Virtual,
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="px-6 py-10 max-w-7xl mx-auto">
        <p className="font-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        {posts.length > 0 ? (
          <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
            {posts.map((post) => (
              <StartupCard key={post._id} post={post} />
            ))}
          </ul>
        ) : (
          <p className="mt-7 text-center text-gray-500">No startups found</p>
        )}
      </section>
    </>
  );
}
