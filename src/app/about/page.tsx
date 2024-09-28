import Head from 'next/head';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="text-center p-8">
      <Head>
        <title>About Us - Butterfly Agency</title>
        <meta name="description" content="Learn more about our butterfly agency." />
      </Head>
      
      <h1 className="text-4xl font-bold mb-4 text-black">About Us</h1>
      <p className="mt-4 mb-8 text-black">
        We are passionate about butterflies and dedicated to researching and preserving their beauty and diversity. 
        Our agency focuses on butterfly conservation and education.
      </p>
      
      <h2 className="text-3xl font-semibold mb-4 text-black">What We Do</h2>
      <p className="mb-8 text-black">
        Our team collects butterflies from various regions while ensuring sustainable practices. 
        We conduct research to understand their behaviors and habitats, aiming to protect these beautiful creatures.
      </p>

      <h2 className="text-3xl font-semibold mb-4 text-black">Why We Do It</h2>
      <p className="mb-8 text-black">
        Butterflies are vital to our ecosystem, serving as pollinators and indicators of environmental health. 
        We strive to raise awareness about their importance and promote conservation efforts.
      </p>

      <h2 className="text-3xl font-semibold mb-4 text-black">Our Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        {/* Butterfly 1 */}
        <div className="border border-gray-300 rounded-lg p-4 bg-white hover:shadow-lg transition">
          <h3 className="font-bold text-xl mb-2 text-black">Monarch Butterfly</h3>
          <Image
            src="/images/monarch.png"
            alt="Monarch Butterfly"
            width={400}
            height={300}
            className="rounded-lg mb-2"
          />
        </div>

        {/* Butterfly 2 */}
        <div className="border border-gray-300 rounded-lg p-4 bg-white hover:shadow-lg transition">
          <h3 className="font-bold text-xl mb-2 text-black">Blue Morpho</h3>
          <Image
            src="/images/morpho.png"
            alt="Blue Morpho"
            width={400}
            height={300}
            className="rounded-lg mb-2"
          />
        </div>

        {/* Butterfly 3 */}
        <div className="border border-gray-300 rounded-lg p-4 bg-white hover:shadow-lg transition">
          <h3 className="font-bold text-xl mb-2 text-black">Swallowtail Butterfly</h3>
          <Image
            src="/images/swall.png"
            alt="Swallowtail Butterfly"
            width={400}
            height={300}
            className="rounded-lg mb-2"
          />
        </div>

        {/* Butterfly 4 */}
        <div className="border border-gray-300 rounded-lg p-4 bg-white hover:shadow-lg transition">
          <h3 className="font-bold text-xl mb-2 text-black">Peacock Butterfly</h3>
          <Image
            src="/images/peacock.png"
            alt="Peacock Butterfly"
            width={400}
            height={300}
            className="rounded-lg mb-2"
          />
        </div>

        {/* Butterfly 5 */}
        <div className="border border-gray-300 rounded-lg p-4 bg-white hover:shadow-lg transition">
          <h3 className="font-bold text-xl mb-2 text-black">Tiger Butterfly</h3>
          <Image
            src="/images/tiger.png"
            alt="Tiger Butterfly"
            width={400}
            height={300}
            className="rounded-lg mb-2"
          />
        </div>

        {/* Butterfly 6 */}
        <div className="border border-gray-300 rounded-lg p-4 bg-white hover:shadow-lg transition">
          <h3 className="font-bold text-xl mb-2 text-black">Glasswing Butterfly</h3>
          <Image
            src="/images/glass.png"
            alt="Glasswing Butterfly"
            width={400}
            height={300}
            className="rounded-lg mb-2"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
