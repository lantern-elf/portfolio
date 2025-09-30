const Footer = () => {
    return (
      <footer className="bg-white text-center text-sm text-gray-500 py-6 border-t">
        {/* <p className="font-semibold text-gray-700">Lantern</p>
        <p className="mb-2">2D Artist & Programmer</p> */}
        {/* <div className="space-x-4">
          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/YOUR_HANDLE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://lanternelf.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Portfolio
          </a>
        </div> */}
        <p className="mt-4 text-xs text-gray-400">Copyright © {new Date().getFullYear()} Lantern Elf </p>
      </footer>
    );
  };
  
  export default Footer;
  