const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-pastelPink to-darkPink text-white p-4 text-center">
        <p>&copy; 2023 Butterfly Agency. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Facebook
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Instagram
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            LinkedIn
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
