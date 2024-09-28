import Head from 'next/head';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8">
      <Head>
        <title>Contact Us - Butterfly Agency</title>
        <meta name="description" content="Get in touch with our butterfly agency." />
      </Head>

      {/* Left Side: Butterfly Image */}
      <div className="flex-1 mb-6 md:mb-0">
        <Image
          src="/images/random.png" // Ensure you have this image
          alt="Random Butterfly"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side: Contact Form and Links */}
      <div className="flex-1 p-4">
        <h1 className="text-4xl font-bold mb-4 text-black">Contact Us</h1>
        <p className="mb-6 text-black">
          We'd love to hear from you! Feel free to reach out with any questions or comments.
        </p>

        <form className="flex flex-col">
          <label className="mb-2 text-black" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="mb-4 p-2 border border-gray-300 rounded"
            required
          />

          <h2 className="text-xl font-semibold mb-2 text-black">Follow Us:</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
