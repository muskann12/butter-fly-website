import Head from 'next/head';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="text-center p-8">
      <Head>
        <title>Butterfly Website - Home</title>
        <meta name="description" content="Learn about butterflies." />
      </Head>
      <h1 className="text-4xl font-bold mb-4 text-black">Welcome to the Butterfly World!</h1>
      <p className="mt-4 mb-8 text-black">
        We are dedicated to researching and showcasing the beauty and diversity of butterflies around the world.
      </p>

      <section className="mt-10">
        <h2 className="text-3xl font-semibold mb-4 text-black">Types of Butterflies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Butterfly 1 */}
          <div className="border border-gray-300 rounded-lg p-4 bg-white hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2 text-black">Monarch Butterfly</h3>
            <Image
              src="/images/monarch.png"
              alt="Monarch Butterfly"
              width={300}
              height={200}
              className="rounded-lg mb-2"
            />
            <p className="text-black">Famous for its long migration and distinctive orange and black wings.</p>
          </div>

          {/* Butterfly 2 */}
          <div className="border border-gray-300 rounded-lg p-4 bg-white hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2 text-black">Blue Morpho</h3>
            <Image
              src="/images/morpho.png"
              alt="Blue Morpho"
              width={300}
              height={200}
              className="rounded-lg mb-2"
            />
            <p className="text-black">Known for its vibrant blue color and large wingspan.</p>
          </div>

          {/* Butterfly 3 */}
          <div className="border border-gray-300 rounded-lg p-4 bg-white hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2 text-black">Swallowtail Butterfly</h3>
            <Image
              src="/images/swall.png"
              alt="Swallowtail Butterfly"
              width={300}
              height={200}
              className="rounded-lg mb-2"
            />
            <p className="text-black">Characterized by its tail-like extensions on the hindwings.</p>
          </div>

          {/* Butterfly 4 */}
          <div className="border border-gray-300 rounded-lg p-4 bg-white hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2 text-black">Peacock Butterfly</h3>
            <Image
              src="/images/peacock.png"
              alt="Peacock Butterfly"
              width={300}
              height={200}
              className="rounded-lg mb-2"
            />
            <p className="text-black">Recognizable by its eye-like markings on the wings.</p>
          </div>

          {/* Butterfly 5 */}
          <div className="border border-gray-300 rounded-lg p-4 bg-white hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2 text-black">Tiger Butterfly</h3>
            <Image
              src="/images/tiger.png"
              alt="Tiger Butterfly"
              width={300}
              height={200}
              className="rounded-lg mb-2"
            />
            <p className="text-black">Known for its orange and black stripes resembling a tiger.</p>
          </div>

          {/* Butterfly 6 */}
          <div className="border border-gray-300 rounded-lg p-4 bg-white hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2 text-black">Glasswing Butterfly</h3>
            <Image
              src="/images/glass.png"
              alt="Glasswing Butterfly"
              width={300}
              height={200}
              className="rounded-lg mb-2"
            />
            <p className="text-black">Famous for its transparent wings, giving it a glass-like appearance.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
