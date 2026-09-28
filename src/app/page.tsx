export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16 sm:px-10">
      <section className="w-full max-w-5xl">
        <p className="mb-4 text-base font-medium tracking-[0.2em] text-zinc-500 uppercase sm:text-lg">
          UI / OS Visual Designer
        </p>
        <h1 className="max-w-4xl text-5xl leading-[0.95] font-semibold tracking-[-0.055em] text-zinc-950 sm:text-7xl md:text-8xl lg:text-9xl">
          Hello, I&apos;m Deon.
        </h1>
        <button
          type="button"
          className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-zinc-950 px-7 py-3 text-base font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950 sm:mt-14"
        >
          View My Work
        </button>
      </section>
    </main>
  );
}
