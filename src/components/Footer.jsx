// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Brand */}
        <h2 className="text-lg font-semibold mb-3 md:mb-0">
          © {new Date().getFullYear()} TaskMaster
        </h2>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="#"
            className="hover:text-gray-200 transition-colors duration-200"
          >
            Privacy
          </a>
          <a
            href="#"
            className="hover:text-gray-200 transition-colors duration-200"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
