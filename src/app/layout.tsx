import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main> {/* This allows main to grow */}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
