export default function Home() {
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
      </section>
    </>
  );
}
