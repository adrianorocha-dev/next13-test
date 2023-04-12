import { BuyButton } from "@/components/BuyButton"

const data = {
  title: 'Lorem Ipsun',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit!',
  videoURL: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  textParagraphs: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  ],
  buyLink: {
    url: 'http://pudim.com.br/',
    title: 'Quero ser rickrollado!',
  },
}


export default async function Home() {
  return (
    <main
    className="flex min-h-[100svh] w-screen flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-blue-950"
  >
    <div className="w-full max-w-3xl px-6 py-16">
      <section>
        <h1
          className="bg-gradient-to-br from-sky-300 to-sky-400 bg-clip-text text-center text-3xl font-extrabold uppercase text-transparent"
        >
          {data.title}
        </h1>

        <h2 className="mt-2 text-center text-lg font-semibold text-white">
          {data.subtitle}
        </h2>
      </section>

      <section className="my-8">
        <iframe
          className="h-56 w-full rounded-xl md:h-72 lg:h-96"
          src={data.videoURL}
          title="Promotional video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </section>

      <section className="flex flex-col gap-1">
        {
          data.textParagraphs.map((paragraph) => (
            <p key={paragraph} className="text-md text-white">{paragraph}</p>
          ))
        }
      </section>

      <section className="mt-6 flex justify-center">
        <BuyButton
          title={data.buyLink.title}
          url={data.buyLink.url}
        />
      </section>
    </div>
  </main>
  )
}
